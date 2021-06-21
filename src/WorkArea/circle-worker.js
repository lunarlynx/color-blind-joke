import p5Raw from 'p5';
import {generateCircles} from "../utils/render";

export const circleWorker = () => {
    onmessage = (event) => {
        const {text} = event.data;

        let p5 = new p5Raw();
        let circles = generateCircles(p5, text);
        p5.remove();

        postMessage({
            circles
        });
    };
};
