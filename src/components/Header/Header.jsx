import CustumButton from "../CustumButton/CustumButton";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.btnsBlock}>
          <CustumButton><a href="#users">Users</a></CustumButton>
          <CustumButton><a href="#sign-up">Sign up</a></CustumButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
