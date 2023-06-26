import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ className }) {
  const [timesClicked, setTimesClicked] = useState(0);
  function handleClick() {
    setTimesClicked(timesClicked + 1);
  }

  if (timesClicked < 3) {
    className = 'freezing';
  } else if (timesClicked < 6) {
    className = 'cold';
  } else if (timesClicked < 9) {
    className = 'luke-warm';
  } else if (timesClicked < 12) {
    className = 'warmer';
  } else if (timesClicked < 15) {
    className = 'hot';
  } else if (timesClicked < 18) {
    className = 'on-fire';
  }
  return (
    <button className={className} onClick={handleClick}>
      Hot Button
    </button>
  );
}
