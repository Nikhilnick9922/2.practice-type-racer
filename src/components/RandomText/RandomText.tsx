import "./randomText.css";
import results from "../../assets/icons/results.png";

const RandomText = () => {
  return (
    <div className="randDomTextContainer">
      <div className="textLinkContainer">
        <h2 className="randonHeading">Practice Racetrack</h2>
        <span>
          You are in a <b>single-player</b> race. <a href="">Click Here </a> if
          you'd like some compeition.
        </span>
      </div>
      <div className="linkContainer">
        <a href="">recent scores</a>
        <img src={results} alt="" />
      </div>
    </div>
  );
};

export default RandomText;
