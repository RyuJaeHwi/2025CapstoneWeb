import './SecondBanner.css';

function SecondBanner() {
  // ✅ 스크롤 함수 정의
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드럽게
    });
  };

  return (
    <div className="second-banner">
      <img
        src="/banner2/GoTitleButton.png"
        alt="Go to Title"
        className="go-title-button"
        onClick={scrollToTop} // ✅ 클릭 시 실행
      />
    </div>
  );
}

export default SecondBanner;
