import './FirstPage.css';

function FirstPage() {
  return (
    <div className="firstpage">
      <img
        src="/page1/GameTitle.png"
        alt="Game Title"
        className="game_title"
      />

      <div className="link-button-container">
        <a href="https://www.notion.so/1adcfca802aa80d1a2beeadf4f0c383e?pvs=4" target="_blank" rel="noopener noreferrer">
          <img
            src="/page1/NotionButton.png"
            alt="Notion Button"
            className="notion-button"
          />
        </a>
{/* 
        <img
          src="/page1/DownloadButton.png"
          alt="Download Button"
          className="download-button"
        /> */}
      </div>
    </div>
  );
}

export default FirstPage;
