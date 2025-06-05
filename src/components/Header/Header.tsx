import NavLink from "./NavLinks/NavLink";
import UserAuth from "./UserAuth/UserAuth";
import styles from "./Header.module.css";
import racingLogo from "../../assets/icons/racingLogo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={racingLogo} alt="" className={styles.racingLogo} />
        <span className={styles.logoText}>typeracer</span>
        <NavLink />
      </div>
      <UserAuth />
    </div>
  );
};

export default Header;
