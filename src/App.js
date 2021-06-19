import './App.css';
import WorkArea from './WorkArea/WorkArea';
import {useState} from "react";

function App() {
    const downloadHandler = async () => {
        //todo svg, png with transparency
        const canvas = document.querySelector('canvas');
        const img = canvas.toDataURL("image/png");
        const a = document.createElement("a"); //Create <a>
        a.href = img; //Image Base64 Goes here
        a.download = "text.png"; //File name Here
        a.click(); //Downloaded file
    }

    const [inputValue, setInputValue] = useState('');

    const userWord = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="App">
            <input onChange={userWord} />
            <WorkArea key={inputValue} text={inputValue.toUpperCase()} />
            <button onClick={downloadHandler}>download svg</button>
        </div>
    );
}

export default App;
