import './SecondPage.css';
import BackToBannerButton from './BackToBannerButton';

function SecondPage() {
  return (
    <div className="secondpage" id="secondpage">
      <BackToBannerButton />

      <div className="instruction-row">
        <img
          src={`${import.meta.env.BASE_URL}page2/Intro.png`}
          alt="Intro"
          className="intro-image"
        />
        <img
          src={`${import.meta.env.BASE_URL}page2/BasicStand.png`}
          alt="Basic Stand"
          className="stand-image"
        />
      </div>
    </div>
  );
}

export default SecondPage;
