const circleWorker = () => {
    onmessage = (event) => {
        const {text, p5Raw, generateCircles} = event.data;

        let p5 = new p5Raw();
        let circles = generateCircles(p5, text);
        p5.remove();

        postMessage({
            circles
        });
    };
};

export default circleWorker;
