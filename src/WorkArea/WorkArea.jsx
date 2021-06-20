import Sketch from "react-p5";
import {useState} from "react";
import {drawAllCircles, generateCircles, height, width} from "../utils/render";

const WorkArea = ({text}) => {

    const downloadHandler = async () => {
        //todo svg, png with transparency
        const canvas = document.querySelector('canvas');
        const img = canvas.toDataURL("image/png");
        const a = document.createElement("a"); //Create <a>
        a.href = img; //Image Base64 Goes here
        a.download = "text.png"; //File name Here
        a.click(); //Downloaded file
    }

    const [ourCircles, setOurCircles] = useState();
    const [unblind, setUnblind] = useState(false);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background("transparent")
        p5.fill("#2AC1A6");
        p5.noStroke();
        let circles = generateCircles(p5, text);
        setOurCircles(circles);
    };


    const draw = (p5) => {
        drawAllCircles(p5, ourCircles, unblind);
    }

    const unblindHandler = () => {
        setUnblind(!unblind);
    }

    return (
        <>
            <div>
                {/*<Sketch setup={setup}/>*/}
                <Sketch setup={setup} draw={draw}/>
                <button onClick={downloadHandler}>Download PNG</button>
                <button onClick={unblindHandler}>{unblind ? "Blind" : "Unblind"}</button>
            </div>
        </>)
};


export default WorkArea;
