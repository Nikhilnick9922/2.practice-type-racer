import Button from "../../Reusables/Button/Button";
import "./callToACtionBanner.css";

const CallToActionBanner = () => {
  return (
    <div className="callContainer">
      <div className="headingText">
        <h2 className="callHeading">
          Record your races with a TypeRacer Account!
        </h2>
        <span className="callText">
          Save your race history and scores. Customize your profile and car.
          It's free, why not?
        </span>
      </div>
      <div className="btnContainer">
        <Button
          title="Create Your Account"
          color="#e68200"
          classes={["btnLarge"]}
        />
      </div>
    </div>
  );
};

export default CallToActionBanner;
