import './App.css';
import RotatingBanner from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="App">
      <RotatingBanner items={items} />
    </div>
  );
}

export default App;
