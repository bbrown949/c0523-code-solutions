export default function Buttons({ text, onCustomClick }) {
  return <button onClick={onCustomClick}>{text}</button>;
}
