import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} ${text}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          text="Bryan"
          color="red"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Bloch"
          color="green"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Brown"
          color="teal"
          onCustomClick={handleCustomClick}
        />
      </header>
    </div>
  );
}

export default App;
