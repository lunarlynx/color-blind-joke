export const width = 700;
export const height = 700;

const protection = 50000;
const colorsRed = ["#f49427", "#c9785c", "#fece00", "#f1b181"];
const colorsGreen = ["#7ba55e", "#89b370", "#b6c674"];

// For generate more big circles
const generateBigCircles = (fontSize) => {
    return [fontSize / 20, fontSize / 25, fontSize / 30, fontSize / 35];
}

// For generate less small circles, its more beautiful, trust
const generateSmallCircles = (fontSize) => {
    return [fontSize / 50, fontSize / 60];
}

export const checkBordersCircle = (circle) => {
    return Math.hypot(circle.x - (width / 2), circle.y - (width / 2)) + circle.r <= (width / 2)
}

// Generating all circles in the text and area
export function generateCircles(text) {
    let circles = [];

    console.log("before VT")
    let [ctx, fontSize] = createVirtualText(text);
    console.log("after VT " + fontSize)
    let fontSizeForCircles = fontSize;
    if (text.length <= 2) {
        [, fontSizeForCircles] = createVirtualText("aaa");
    }

    //circle size is based on text length, so we need to fix circles number based on the same parameter
    const totalNumber = text.length * 2000;

    let forBigCircles = generateBigCircles(fontSizeForCircles);
    let forSmallCircles = generateSmallCircles(fontSizeForCircles);
    generate(forBigCircles, colorsGreen, circles, getCheckBordersText(ctx, true), totalNumber);
    generate(forSmallCircles, colorsGreen, circles, getCheckBordersText(ctx, true), totalNumber);

    let checkBorders = (circle) => checkBordersCircle(circle) && getCheckBordersText(ctx, false)(circle);

    generate(forBigCircles, colorsRed, circles, checkBorders, totalNumber);
    generate(forSmallCircles, colorsRed, circles, checkBorders, totalNumber);
    return circles;
}

export function getColorForUnblind(unblind, circle) {
    return unblind ? (colorsRed.includes(circle.color) ? "#d98b8b" : "#000000") : circle.color;
}

function getCheckBordersText(ctx, eq) {
    return (circle) => {
        let ourCircleColors = ctx.getImageData(circle.x, circle.y, 1, 1).data
        let result = ourCircleColors[0] === 0;
        return result === eq;
    };
}

function getFont(fontSize) {
    return `${fontSize}px Arial`;
}

function createVirtualText(text) {
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const ctx = offscreenCanvas.getContext("2d");

    const fontSize = getFontSize(ctx, text);
    ctx.font = getFont(fontSize);

    let textWidth = getTextWidth(ctx, text);
    // noinspection JSSuspiciousNameCombination
    let textHeight = getTextWidth(ctx, "M");

    let xStart = (width / 2) - (textWidth / 2);
    let yStart = (height / 2) + (textHeight / 2);
    ctx.fillText(text, xStart, yStart);
    return [ctx, fontSize];
}

function getTextWidth(ctx, text) {
    return ctx.measureText(text).width;
}

function getFontSize(ctx, text) {
    let candidate = 5;
    let iterations = 0;
    while (true) {
        if (++iterations > 1000) throw new Error(iterations.toString())
        ctx.font = getFont(candidate + 1);
        let textWidth = getTextWidth(ctx, text);
        let textHeight = getTextWidth(ctx, "M");
        let xStart = (width / 2) - (textWidth / 2);
        let yStart = (height / 2) + (textHeight / 2);

        if (Math.hypot((width / 2) - xStart, (height / 2) - yStart) > width / 2) {
            return candidate;
        }
        candidate = candidate + 1;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomFromArray(array) {
    return array[getRandomInt(array.length)]
}

/**
 *
 * @param {Array<*>} acceptableRadius - array of possible radius depends of text size
 * @param {Array<string>} colors - array of possible colors
 * @param {Array<*>} circles - collect all circles in general array
 * @param {function(any): boolean} checkBorders - checking that the circles fit into the text
 * @param {number} totalNumber - how many circles will there be in the final drawing
 */
export const generate = (acceptableRadius, colors, circles, checkBorders, totalNumber) => {
    let counter = 0;

    // populate circles array
    // brute force method continues until # of circles target is reached
    // or until the protection value is reached
    while (circles.length < totalNumber && counter < protection) {
        let circle = {
            x: getRandomInt(width),
            y: getRandomInt(height),
            r: getRandomFromArray(acceptableRadius),
            color: getRandomFromArray(colors)
        };
        let overlapping = false;

        if (!checkBorders(circle)) {
            overlapping = true;
        } else {
            for (let i = 0; i < circles.length; i++) {
                const existing = circles[i];
                const distance = Math.hypot(circle.x - existing.x, circle.y - existing.y);
                if (distance < circle.r + existing.r + 1) {
                    // They are overlapping
                    overlapping = true;
                    // do not add to array
                    break;
                }
            }
        }

        // add valid circles to array
        if (!overlapping) {
            circles.push(circle);
        }

        counter++;
    }
}

