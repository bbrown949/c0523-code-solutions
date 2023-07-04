import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('use state', isClicked);
  function handleClick() {
    console.log('value BEFORE calling the setter', isClicked);
    setIsClicked(!isClicked);
    console.log('value AFTER calling the setter', isClicked);
  }

  const buttonColor = isClicked ? color : 'white';
  return (
    <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
      {text}
    </button>
  );
}
