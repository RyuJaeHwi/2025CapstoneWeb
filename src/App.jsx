import './App.css';
import FirstPage from './pages/FirstPage';
import FirstBanner from './pages/FirstBanner';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import SecondBanner from './pages/SecondBanner';

function App() {
  return (
    <>
      <FirstPage />
      <FirstBanner />
      <SecondPage /> {/* ✅ 추가 */}
      <ThirdPage />
      <FourthPage />
      <SecondBanner />
    </>
  );
}

export default App;
