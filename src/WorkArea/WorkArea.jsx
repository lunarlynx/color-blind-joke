import Sketch from "react-p5";
import {useEffect, useState} from "react";
import {getColorForUnblind, height, width} from "../utils/render";
import C2S from "canvas2svg";
import Worker from "./circle.worker";
import Loader from "react-loader-spinner";

const WorkArea = ({text}) => {
        useEffect(() => {
            (async () => {
                const worker = new Worker();
                worker.onmessage = (event) => {
                    const {circles} = event.data;
                    setOurCircles(circles);
                }
                worker.postMessage({text});
            })();
        });

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

        const [ourCircles, setOurCircles] = useState([]);
        const [unblind, setUnblind] = useState(false);
        const [startCalculated, setStartCalculated] = useState(false);


        // Initialization of canvas
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.background("transparent")
            p5.noStroke();
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

        const hasCircles = ourCircles.length > 0;

        return (
            <>
                {!hasCircles && <Loader
                    type="Grid"
                    color="#b47878"
                    height={100}
                    width={100}
                />}

                {hasCircles &&
                <>
                    <div className="download-menu">
                        <button onClick={downloadSVGHandler}>SVG</button>
                        <button onClick={downloadPNGHandler}>PNG</button>
                        <button onClick={unblindHandler}>{unblind ? "Blind" : "Unblind"}</button>
                    </div>
                    <Sketch setup={setup} draw={draw}/>
                </>
                }
            </>)
    }
;

export const drawAllCircles = (p5, circles, unblind) => {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let color = getColorForUnblind(unblind, circle);
        p5.fill(color);
        p5.ellipse(circle.x, circle.y,
            circle.r * 2, circle.r * 2);
    }
};


export default WorkArea;
