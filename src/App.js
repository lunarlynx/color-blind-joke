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
            <label>Enter your text:</label>
            <input onChange={userWord} max={10} min={1} />
            <span class="subtitle">max length 10 symbols</span>
            <button onClick={sendWord}>Generate!</button>
            {inputValue && renderedValue > 0 && <WorkArea key={renderedValue} text={inputValue.toUpperCase()} />}
        </div>
    );
}

export default App;
