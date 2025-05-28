import './ThirdPage.css';
import BackToBannerButton from './BackToBannerButton';
import { useState } from 'react';

function ThirdPage() {
  const [popupStage, setPopupStage] = useState(null); // null | 1 | 2 | 3 | 4

  const handleOpenPopup = (stage) => {
    setPopupStage(stage);
  };

  const handleClosePopup = () => {
    setPopupStage(null);
  };

  return (
    <div className="thirdpage" id="thirdpage">
      <BackToBannerButton />

      <div className="stage-button-list">
        <img
          src="/page3/Stage1.png"
          alt="Stage1"
          className="stage-button"
          onClick={() => handleOpenPopup(1)}
        />
        <img
          src="/page3/Stage2.png"
          alt="Stage2"
          className="stage-button"
          onClick={() => handleOpenPopup(2)}
        />
        <img
          src="/page3/Stage3.png"
          alt="Stage3"
          className="stage-button"
          onClick={() => handleOpenPopup(3)}
        />
        <img
          src="/page3/Stage4.png"
          alt="Stage4"
          className="stage-button"
          onClick={() => handleOpenPopup(4)}
        />
      </div>

      {popupStage && (
        <div className="popup-overlay">
          <div className="popup-box">
            <img
              src="/page3/closebutton.png"
              alt="Close"
              className="popup-close"
              onClick={handleClosePopup}
            />
            <img
              src="/page3/PopupBox.png"
              alt="Popup Background"
              className="popup-content"
            />

            <div className="popup-inner">
              {popupStage === 1 && (
                <>
                  <img
                    src="/page3/Stage1Image.png"
                    alt="Stage1"
                    className="popup-stage-image"
                  />
                  <div className="popup-text">
                    <h3>Stage 1</h3>
                    <p>
                      처음 등장하는 튜토리얼 스테이지입니다. 타 스테이지에서 등장하는 특수한 장애물이 없기 때문에
                      기본 조작 키와 움직임을 익힐 수 있으며, 몬스터들의 공격도 단순하여 게임 플레이 방법을 익힐 수 있습니다.
                    </p>
                  </div>
                </>
              )}

              {popupStage === 2 && (
                <>
                  <img
                    src="/page3/Stage2Chess.png"
                    alt="Stage2"
                    className="popup-stage-image"
                  />
                  <div className="popup-text">
                    <h3>Stage 2</h3>
                    <p>
                      체스말 모양의 장애물이 등장하는 스테이지입니다. 해당 장애물에 부딪히면 체력이 하나 깎이기 때문에 
                      등장하는 것을 잘 확인하고 피해야 합니다.
                    </p>
                  </div>
                </>
              )}

              {popupStage === 3 && (
                <>
                  <img
                    src="/page3/Stage3Water.png"
                    alt="Stage3"
                    className="popup-stage-image"
                  />
                  <div className="popup-text">
                    <h3>Stage 3</h3>
                    <p>
                      가까이 다가가면 점점 빨려들어가는 물 소용돌이 장애물이 등장합니다.
                      해당 장애물을 조심하며 적 공격을 피하는 것에 집중해야 하는 스테이지입니다.
                    </p>
                  </div>
                </>
              )}

              {popupStage === 4 && (
                <div className="popup-stage4-layout">
                  <div className="popup-stage4-images">
                    <img
                      src="/page3/Stage4Image.png"
                      alt="Stage4"
                      className="popup-stage4-img"
                    />
                    <img
                      src="/page3/HiddenStage4Image.png"
                      alt="HiddenStage4"
                      className="popup-stage4-img"
                    />
                  </div>
                  <div className="popup-stage4-text">
                    <h3>Stage 4</h3>
                    <p>
                      조건에 따라 갈 수 있는 루트가 나뉘는 스테이지입니다.
                      일반 루트를 진행하면 Stage4로, 특정 조건을 만족하면 HiddenStage4로 진입하게 됩니다.
                      각각 다른 몬스터와 보스가 존재하며, 엔딩 또한 다릅니다.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThirdPage;
