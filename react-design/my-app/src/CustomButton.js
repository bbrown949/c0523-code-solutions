import './CustomButton.css';

export default function CustomButton({ text, onCustomClick, activeButton }) {
  return (
    <button
      className={activeButton ? 'activeButton' : ''}
      onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
}
