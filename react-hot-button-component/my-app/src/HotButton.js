import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [timesClicked, setTimesClicked] = useState(0);
  function handleClick() {
    setTimesClicked(timesClicked + 1);
  }

  let temperature = '';

  if (timesClicked < 3) {
    temperature = 'freezing';
  } else if (timesClicked < 6) {
    temperature = 'cold';
  } else if (timesClicked < 9) {
    temperature = 'luke-warm';
  } else if (timesClicked < 12) {
    temperature = 'warmer';
  } else if (timesClicked < 15) {
    temperature = 'hot';
  } else if (timesClicked < 18) {
    temperature = 'on-fire';
  }
  return (
    <button className={temperature} onClick={handleClick}>
      Hot Button
    </button>
  );
}
