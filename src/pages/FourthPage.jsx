import './FourthPage.css';
import BackToBannerButton from './BackToBannerButton';

function FourthPage() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="fourthpage" id="fourthpage">
      <BackToBannerButton />

      <img
        src={`${base}page4/synopsis.png`}
        alt="Synopsis"
        className="synopsis-title"
      />

      <img
        src={`${base}page4/TextAll.png`}
        alt="Text Description"
        className="synopsis-description"
      />
    </div>
  );
}

export default FourthPage;
