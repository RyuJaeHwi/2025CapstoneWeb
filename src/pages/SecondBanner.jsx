import './SecondBanner.css';

function SecondBanner() {
  const base = import.meta.env.BASE_URL;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="second-banner">
      <img
        src={`${base}banner2/GoTitleButton.png`}
        alt="Go to Title"
        className="go-title-button"
        onClick={scrollToTop}
      />
    </div>
  );
}

export default SecondBanner;
