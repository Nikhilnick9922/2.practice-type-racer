import "./App.css";
import CallToActionBanner from "./components/CallToActionBanner/CallToActionBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HighScoreDisplay from "./components/HighScroreDisplay/HightScoreDisplay";
import PracticeMode from "./components/PracticeMode/PracticeMode";
import RandomText from "./components/RandomText/RandomText";

const App = () => {
  return (
    <div className="container">
      <Header />
      <CallToActionBanner />
      <RandomText />
      <PracticeMode />
      <HighScoreDisplay />
      <Footer />
    </div>
  );
};

export default App;
