import "./userAuth.css";
import riderLogo from "../../../assets/icons/riderLogo.png";
import Button from "../../../Reusables/Button/Button";

const UserAuth = () => {
  return (
    <div className="authContainer">
      <img className="riderLogo" src={riderLogo} />
      <div className="btnTextContainer">
        <span className="guessTxt">Guest</span>
        <div className="buttonGroup">
          <Button title="CREATE ACCOUNT" classes={["btnYellow", "btnSmall"]} />
          <Button title="SIGN IN" color="#67ac5b" classes={["btnSmall"]} />
          <Button title="0 WPM" color="#219ab0" classes={["btnSmall"]} />
          <Button title="0 Races" color="#219ab0" classes={["btnSmall"]} />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
