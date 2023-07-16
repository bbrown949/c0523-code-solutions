import './App.css';
import AppDrawer from './AppDrawer';

const listItems = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Products' },
  { id: 3, name: 'Cart' },
  { id: 4, name: 'About Us' },
  { id: 5, name: 'Legal' },
];

function App() {
  return <AppDrawer listItems={listItems} />;
}

export default App;
