import styles from "./PracticeMode.module.css";
import car from "../../assets/icons/car.png";
import questionMark from "../../assets/icons/questionMark.png";
import lock from "../../assets/icons/lock.png";
import Button from "../../Reusables/Button/Button";
import ExpandingTag from "../../Reusables/ExpandingShape/ExpandingTag";

const PracticeMode = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.raceHeading}>
        The race is on! Type the text below:
      </h2>

      <div className={styles.carAndWpmContainer}>
        <div className={styles.txtAndCar}>
          <div className={styles.expandingType}>
            <ExpandingTag
              title={
                <text>
                  Type <br /> This
                </text>
              }
            />
          </div>
          <span>
            Guest
            <br />
            (You)
          </span>
          <img src={car} alt="" />
        </div>
        <span className={styles.wpm}>0 wpm</span>
      </div>
      <span className={styles.dottedLines}>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </span>
      <div className={styles.paraContainer}>
        <span className={styles.racingText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          voluptatem dolorem veritatis dicta omnis quo cupiditate, autem
          assumenda quae neque.
        </span>
        <div className={styles.temp}>
          <span></span> <a href="">change display format</a>
        </div>
        <input type="text" />
        <div className={styles.expandingHere}>
          <ExpandingTag title={<text>Here</text>} />
        </div>
        <div className={styles.temp}>
          <span></span> <img src={questionMark} alt="" />
        </div>
      </div>

      <div className={`${styles.temp} ${styles.menuContainer}`}>
        <Button
          title="Main menu (leave practice)"
          classes={["btnLong"]}
          color="#ffb11b"
        />
        <div className={styles.textGroup}>
          <span>Select your Text:</span>
          <div className={styles.defaultGroup}>
            <img className={styles.lock} src={lock} alt="" />{" "}
            <label htmlFor={styles.default}>Default</label>
            <img className={styles.questionMark} src={questionMark} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;
