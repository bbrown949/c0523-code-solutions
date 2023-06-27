import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <div>
        <RegistrationFormUncontrolled />
        <RegistrationFormControlled />
      </div>
    </div>
  );
}

export default App;
