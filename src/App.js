import './App.css';
import WorkArea from './WorkArea/WorkArea';
import {useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState('');
    const [renderedValue, setRenderedValue] = useState(0);

    const userWord = (event) => {
        setInputValue(event.target.value);
        if (event.target.value.length > 10) {
            event.target.value = event.target.value.substr(0, 10);
        }
    }

    const sendWord = () => {
        setRenderedValue(renderedValue + 1);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="col-left">
                    <a href="#" className="logo">
                        <img src="./logo.svg" width="50" height="50"/>
                        <span>color-blind-joke</span>
                    </a>
                    <div className="form">
                        <div className="form-items">
                            <label>Enter your text:</label>
                            <input onChange={userWord} max={10} min={1}/>
                            <span className="subtitle">max length 10 symbols</span>
                        </div>
                    </div>
                    <div className="button-bar">
                        <button onClick={sendWord}>Generate!</button>
                    </div>
                </div>
                <div className="col-right">
                    {inputValue && renderedValue > 0 &&
                        <WorkArea key={renderedValue} text={inputValue.toUpperCase()}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
