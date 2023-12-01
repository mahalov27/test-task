import successImg from "../../assets/success-image.svg";
import styles from "./Registered.module.scss";

const Registered = () => {
  return (
    <section className={styles.section}>
      <h1>User successfully registered</h1>
      <img src={successImg} alt="image of a girl with a laptop" />
    </section>
  );
};

export default Registered;
