import './App.css';
import WorkArea from './WorkArea/WorkArea';
import {useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState('');
    const [renderedValue, setRenderedValue] = useState('');

    const userWord = (event) => {
        setInputValue(event.target.value);
    }

    const sendWord = () => {
        setRenderedValue(inputValue);
    }

    return (
        <div className="App">
            <input onChange={userWord} />
            <button onClick={sendWord}>Generate!</button>
            <WorkArea key={renderedValue} text={renderedValue.toUpperCase()} />
        </div>
    );
}

export default App;
