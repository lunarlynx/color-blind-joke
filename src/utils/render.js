const width = 500;
const height = 500;
const totalNumber = 15000;
const protection = 100000;

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


export const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    drawAllCircles(p5);
};

export const drawAllCircles = (p5, text) => {
    let circles = [];
    drawText(p5, [12, 17, 22, 25], circles, text);
    drawText(p5, [5, 8], circles, text);
    draw(p5, [12, 17, 22, 25], ["#850909"], circles, checkBordersCircle);
    draw(p5, [5, 8], ["#850909"], circles, checkBordersCircle);

    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        p5.fill(circle.color);
        p5.ellipse(circle.x, circle.y,
            circle.r * 2, circle.r * 2);
    }
};

function drawText(p5, numbers, circles, text) {
    let pg = createVirtualText(p5, text);

    draw(p5, numbers, ["#076A07"], circles, (circle) => {
        let ourCircleColors = pg.get(circle.x, circle.y);

        return ourCircleColors[0] === 0;
    });
}



function createVirtualText(p5, text) {
    const pg = p5.createGraphics(500, 500);

    console.log("Render");
    pg.background("transparent");
    pg.textFont('Arial');
    pg.textStyle(p5.BOLD);

    let fontSize = getFontSize(pg, text);
    pg.textSize(fontSize);

    let textWidth = pg.textWidth(text);
    let textHeight = pg.textWidth("М");

    let xStart = 250 - (textWidth / 2);
    let yStart = 250 + (textHeight / 2);
    pg.text(text, xStart, yStart);
    return pg;
}

function getFontSize(p5, text) {
    let candidate = 5;
    while (true) {
        p5.textSize(candidate + 1);
        let textWidth = p5.textWidth(text);
        let textHeight = p5.textWidth("М");
        let xStart = 250 - (textWidth / 2);
        let yStart = 250 + (textHeight / 2);

        if (p5.dist(250, 250, xStart, yStart) <= 250) {
            candidate = candidate + 1;
        } else {
            return candidate;
        }
    }
}



function getmeSomeValue() {
    return false;
}

export const draw = (p5, acceptableRadius, colors, circles, checkBorders) => {
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
