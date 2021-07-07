import {generateCircles} from "../utils/render";

onmessage = (event) => {
    const {text} = event.data;
    let circles = generateCircles(text);
    postMessage({
        circles
    });
};
