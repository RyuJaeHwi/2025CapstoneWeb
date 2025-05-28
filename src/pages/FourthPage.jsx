import './FourthPage.css';
import BackToBannerButton from './BackToBannerButton';

function FourthPage() {
  return (
    <div className="fourthpage" id="fourthpage">
      <BackToBannerButton />

      <img
        src="/page4/synopsis.png"
        alt="Synopsis"
        className="synopsis-title"
      />

      <img
        src="/page4/TextAll.png"
        alt="Text Description"
        className="synopsis-description"
      />
    </div>
  );
}

export default FourthPage;
