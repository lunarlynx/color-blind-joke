import p5raw from 'p5';

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

export const checkBordersCircle = (circle, p5) => {
    return p5.dist(circle.x, circle.y, width / 2, width / 2) + circle.r <= (width / 2);
}

// Generating all circles in the text and area
export function generateCircles(p5, text) {
    p5 = new p5raw(() => {});
    let circles = [];

    let [pg, fontSize] = createVirtualText(p5, text);
    let fontSizeForCircles = fontSize;
    if (text.length <= 2) {
        [, fontSizeForCircles] = createVirtualText(p5, "aaa");
    }

    //circle size is based on text length, so we need to fix circles number based on the same parameter
    const totalNumber = text.length * 2000;

    let forBigCircles = generateBigCircles(fontSizeForCircles);
    let forSmallCircles = generateSmallCircles(fontSizeForCircles);
    generate(p5, forBigCircles, colorsGreen, circles, getCheckBordersText(pg, true), totalNumber);
    generate(p5, forSmallCircles, colorsGreen, circles, getCheckBordersText(pg, true), totalNumber);

    let checkBorders = (circle, p5) => checkBordersCircle(circle, p5) && getCheckBordersText(pg, false)(circle);

    generate(p5, forBigCircles, colorsRed, circles, checkBorders, totalNumber);
    generate(p5, forSmallCircles, colorsRed, circles, checkBorders, totalNumber);
    return circles;
}

export function getColorForUnblind(unblind, circle) {
    return unblind ? (colorsRed.includes(circle.color) ? "#d98b8b" : "#000000") : circle.color;
}

export const drawAllCircles = (p5, circles, unblind) => {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let color = getColorForUnblind(unblind, circle);
        p5.fill(color);
        p5.ellipse(circle.x, circle.y,
            circle.r * 2, circle.r * 2);
    }
};

function getCheckBordersText(pg, eq) {
    return (circle) => {
        let ourCircleColors = pg.get(circle.x, circle.y);
        let result = ourCircleColors[0] === 0;
        return result === eq;
    };
}
function createVirtualText(p5, text) {
    const pg = p5.createGraphics(width, height);

    pg.background("transparent");
    pg.textFont('Arial');

    let fontSize = getFontSize(pg, text);
    pg.textSize(fontSize);

    let textWidth = pg.textWidth(text);
    let textHeight = pg.textWidth("М");

    let xStart = (width / 2) - (textWidth / 2);
    let yStart = (height / 2) + (textHeight / 2);
    pg.text(text, xStart, yStart);
    return [pg, fontSize];
}

function getFontSize(p5, text) {
    let candidate = 5;
    while (true) {
        p5.textSize(candidate + 1);
        let textWidth = p5.textWidth(text);
        let textHeight = p5.textWidth("М");
        let xStart = (width / 2) - (textWidth / 2);
        let yStart = (height / 2) + (textHeight / 2);

        if (p5.dist(width / 2, height / 2, xStart, yStart) <= width / 2) {
            candidate = candidate + 1;
        } else {
            return candidate;
        }
    }
}


function getmeSomeValue() {
    return false;
}

/**
 *
 * @param p5 - rendering context
 * @param {Array<*>} acceptableRadius - array of possible radius depends of text size
 * @param {Array<string>} colors - array of possible colors
 * @param {Array<*>} circles - collect all circles in general array
 * @param {function(p): boolean} checkBorders - checking that the circles fit into the text
 * @param {number} totalNumber - how many circles will there be in the final drawing
 */
export const generate = (p5, acceptableRadius, colors, circles, checkBorders, totalNumber) => {
    let counter = 0;

    // populate circles array
    // brute force method continues until # of circles target is reached
    // or until the protection value is reached
    while (circles.length < totalNumber && counter < protection) {
        let circle = {
            x: p5.random(width),
            y: p5.random(height),
            r: p5.random(acceptableRadius),
            color: p5.random(colors)
        };
        let overlapping = getmeSomeValue();

        if (!checkBorders(circle, p5)) {
            overlapping = true;
        } else {
            for (let i = 0; i < circles.length; i++) {
                const existing = circles[i];
                const distance = p5.dist(circle.x, circle.y, existing.x, existing.y);
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

