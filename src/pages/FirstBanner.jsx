import './FirstBanner.css';

function FirstBanner() {
  const scrollToSecondPage = () => {
    const element = document.getElementById('secondpage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThirdPage = () => {
    const element = document.getElementById('thirdpage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFourthPage = () => {
    const element = document.getElementById('fourthpage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="firstbanner" id="firstbanner">
      <div className="button-container-horizontal">
        <img
          src="/banner1/GoIntroButton.png"
          alt="Intro Button"
          className="banner-button"
          onClick={scrollToSecondPage}
        />
        <img
          src="/banner1/GoStagePageButton.png"
          alt="Stage Button"
          className="banner-button"
          onClick={scrollToThirdPage}
        />
        <img
          src="/banner1/GoThemeButton.png"
          alt="Theme Button"
          className="banner-button"
          onClick={scrollToFourthPage}
        />
      </div>
    </div>
  );
}

export default FirstBanner;
