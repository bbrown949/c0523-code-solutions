import CustomButton from './CustomButton';
import Banner from './Banner';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNext() {
    setActiveIndex((activeIndex + 1) % items.length);
  }
  function handlePrev() {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  }

  function handleSelect(text) {
    setActiveIndex(text);
  }
  const index = items.map((element, index) => (
    <CustomButton
      key={index}
      text={index}
      activeButton={index === activeIndex}
      onCustomClick={handleSelect}
    />
  ));

  return (
    <div className="banner">
      <Banner text={items[activeIndex]} />
      <div className="buttons">
        <CustomButton text="Prev" onCustomClick={handlePrev} />
        <div className="numbers">{index}</div>
        <CustomButton text="Next" onCustomClick={handleNext} />
      </div>
    </div>
  );
}
