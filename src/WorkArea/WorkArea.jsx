import Sketch from "react-p5";
import {useState} from "react";
import {drawAllCircles, generateCircles, getColorForUnblind, height, width} from "../utils/render";
import C2S from "canvas2svg";

const WorkArea = ({text}) => {

    const downloadPNGHandler = async () => {
        const canvas = document.querySelector('canvas');
        const img = canvas.toDataURL("image/png"); //converts to base64
        const a = document.createElement("a");
        a.href = img;
        a.download = "imageinpng.png";
        a.click();
    }

    const downloadSVGHandler = async () => {
        let img = convertToSvg();
        const a = document.createElement("a");
        a.href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(img);  //converts to base64
        a.download = "imageinsvg.svg";
        a.click();
    }

    const [ourCircles, setOurCircles] = useState();
    const [unblind, setUnblind] = useState(false);

    // Initialization of canvas
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background("transparent")
        p5.noStroke();
        let circles = generateCircles(p5, text);
        setOurCircles(circles);
    };


    // Draw canvas
    const draw = (p5) => {
        drawAllCircles(p5, ourCircles, unblind);
    }

    // Blind or not blind mode
    const unblindHandler = () => {
        setUnblind(!unblind);
    }

    //canvas to svg works only as an emulation:
    //we have to render the same image but using as a context a special handler from canvas2svg C2S
    //unfortunately it doesn't work with p5 so we have to write pure canvas code here
    const convertToSvg = () => {
        let ctx = new C2S(width, height);

        for (let i = 0; i < ourCircles.length; i++) {
            let circle = ourCircles[i];
            ctx.fillStyle = getColorForUnblind(unblind, circle);
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
            ctx.fill();
        }

        return ctx.getSerializedSvg();
    }

    return (
        <>
            <div className="download-menu">
                <button onClick={downloadSVGHandler}>SVG</button>
                <button onClick={downloadPNGHandler}>PNG</button>
                <button onClick={unblindHandler}>{unblind ? "Blind" : "Unblind"}</button>
            </div>
            <Sketch setup={setup} draw={draw}/>
        </>)
};


export default WorkArea;