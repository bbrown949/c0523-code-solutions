import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton text="React" color="red" />
        <ToggleButton text="Toggle" color="green" />
        <ToggleButton text="Button" color="lightblue" />
      </header>
    </div>
  );
}

export default App;
