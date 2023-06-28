import Buttons from './Buttons';
import Banner from './Banner';
import ButtonClick from './ButtonClick';

export default function RotatingBanner({ items }) {
  <ButtonClick />;

  const Indicators = items.map((element, index) => (
    <Buttons key={index} text={index} onCustomClick={ButtonClick} />
  ));

  return (
    <div className="banner">
      <Banner text="Aardvark" />
      <div className="buttons">
        <Buttons text="Prev" onCustomClick={ButtonClick} />

        <div className="indicators">{Indicators}</div>

        <Buttons text="Next" onCustomClick={ButtonClick} />
      </div>
    </div>
  );
}
