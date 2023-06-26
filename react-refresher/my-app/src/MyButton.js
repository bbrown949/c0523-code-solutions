export default function MyButton({ text, onCustomClick }) {
  return (
    <button
      onClick={() => {
        onCustomClick();
      }}
      type="button">
      {text}
    </button>
  );
}
