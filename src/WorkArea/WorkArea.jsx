import Sketch from "react-p5";
import {useState} from "react";
import {drawAllCircles} from "../utils/render";

const WorkArea = ({text}) => {
    let [rendered, setRendered] = useState(false);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.background("transparent")
        p5.fill("#2AC1A6");
        p5.noStroke();
    };


    const draw = (p5) => {
        if (rendered) return;
        drawAllCircles(p5, text);
        setRendered(true);
    }

    return (
        <>
            <div>
                {/*<Sketch setup={setup}/>*/}
                <Sketch setup={setup} draw={draw}/>
            </div>
        </>)
}


export default WorkArea;
