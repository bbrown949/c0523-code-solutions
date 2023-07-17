import { useState } from 'react';
import './ToggleSwitch.css';
export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  const toggleText = isClicked ? 'On' : 'Off';
  return (
    <>
      <label class="switch">
        <input onClick={handleClick} type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div>{toggleText}</div>
    </>
  );
}
