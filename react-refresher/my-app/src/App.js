import './App.css';
import MyButton from './MyButton';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="counter-buttons">
        <MyButton text="Down" onCustomClick={handleDecrease}></MyButton>
        {counter}
        <MyButton text="Up" onCustomClick={handleIncrease}></MyButton>
      </header>
    </div>
  );
}

export default App;
