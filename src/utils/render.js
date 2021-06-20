export const width = 700;
export const height = 700;
const totalNumber = 2000;
const protection = 50000;

const colorsRed = ["#f49427", "#c9785c", "#fece00", "#f1b181"];
const colorsGreen = ["#7ba55e", "#89b370", "#b6c674"];

// const colorsRed = ["#d98b8b"];
// const colorsGreen = ["#000000"];



const generateBigCircles = (fontSize) => {
    return [fontSize / 20, fontSize / 25, fontSize / 30, fontSize / 35];
}

const generateSmallCircles = (fontSize) => {
    return [fontSize / 50, fontSize / 60];
}

export const checkBordersSquare = circle => {
    if (circle.x + circle.r > width) {
        return false;
    }

    if (circle.y + circle.r > height) {
        return false;
    }

    if (circle.x - circle.r < 0) {
        return false;
    }

    return circle.y - circle.r >= 0;
};

export const checkBordersCircle = (circle, p5) => {
    return p5.dist(circle.x, circle.y, width / 2, width / 2) + circle.r <= (width / 2);
}

export function generateCircles(p5, text) {
    let circles = [];

    let [pg, fontSize] = createVirtualText(p5, text);
    let fontSizeForCircles = fontSize;
    if (text.length <= 2) {
        [, fontSizeForCircles] = createVirtualText(p5, "aaa");
    }

    let forBigCircles = generateBigCircles(fontSizeForCircles);
    let forSmallCircles = generateSmallCircles(fontSizeForCircles);
    generateText(p5, pg, forBigCircles, circles, text);
    generateText(p5, pg, forSmallCircles, circles, text);

    let checkBorders = (circle, p5) => checkBordersCircle(circle, p5) && getCheckBordersText(pg, false)(circle);

    generate(p5, forBigCircles, colorsRed, circles, checkBorders);
    generate(p5, forSmallCircles, colorsRed, circles, checkBorders);
    return circles;
}

export const drawAllCircles = (p5, circles, unblind) => {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let color = unblind ? (colorsRed.includes(circle.color) ? "#d98b8b" : "#000000") : circle.color;
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

function generateText(p5, pg, numbers, circles) {
    generate(p5, numbers, colorsGreen, circles, getCheckBordersText(pg, true));
}


function createVirtualText(p5, text) {
    const pg = p5.createGraphics(width, height);

    pg.background("transparent");
    pg.textFont('Arial');
    pg.textStyle(p5.BOLD);

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

export const generate = (p5, acceptableRadius, colors, circles, checkBorders) => {
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
                if (distance < circle.r + existing.r + 2) {
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
