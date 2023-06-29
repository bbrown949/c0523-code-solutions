import './App.css';
import AppDrawer from './AppDrawer';

const listItems = [
  { id: 1, name: 'Jedi' },
  { id: 2, name: 'Sith' },
  { id: 3, name: 'Wookee' },
  { id: 4, name: 'Ewok' },
  { id: 5, name: 'Mandalorian' },
];

function App() {
  return <AppDrawer listItems={listItems} />;
}

export default App;
