import './BackToBannerButton.css';

function BackToBannerButton() {
  const scrollToTopBanner = () => {
    const element = document.getElementById('firstbanner');
    if (element) {
      const offsetTop = element.offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      // 배너가 화면 중앙에 오도록 스크롤 조정
      const scrollPosition = offsetTop - (windowHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <img
      src={`${import.meta.env.BASE_URL}common/BackToBanner1.png`}
      alt="Back to Top"
      className="back-button"
      onClick={scrollToTopBanner}
    />
  );
}

export default BackToBannerButton;
