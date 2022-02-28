import { useState , useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [boxArray, setBoxArray] = useState([]);
    const [boxColor, setBoxColor] = useState('blue');
    const colorArray = ['blue', 'purple', 'green', 'red'];

    const boxStyle = {
        width: '50px',
        height: '50px',
        backgroundColor: boxColor,
        marginBottom: '10px'
    }

    const boxEles = boxArray.map((obj, index) =>
        <div style={boxStyle} key={index} className="box"></div>
    )

    function addCounter() {
        setCounter(counter + 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    useEffect(() => {
        if (counter === 0) {
            setBoxArray([]);
        }
        if (counter % 2 !== 0) {
            let newEntry = [boxArray.length];
            setBoxArray(boxArray.concat(newEntry));
        }
        if (counter % 5 === 0) {
            let newColor = boxColor;
            while (newColor === boxColor) {
                let colorIndex = Math.floor(Math.random() * (4 - 0) + 0);
                newColor = colorArray[colorIndex];
            }
            setBoxColor(newColor);
        }
    }, [counter])

  return (
    <div>
        <header>
            <div className="button-container">
                <div onClick={addCounter} id="counter-button">Increase by 1</div>
                <div onClick={resetCounter} id="reset-button">Reset</div>
            </div>
            <div id="counter">{counter}</div>
        </header>
        <main>
            {boxEles}
        </main>
    </div>
  );
}

export default App;
