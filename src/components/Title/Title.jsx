/* eslint-disable react/no-unescaped-entities */
import CustumButton from "../CustumButton/CustumButton";
import bg from "../../assets/bg.webp";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <section className={styles.section} style={{backgroundImage: `url(${bg})`}}>
      <div>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      <CustumButton>
        <a href="#sign-up">Sign up</a>
      </CustumButton>
      </div>
    </section>
  );
};

export default Title;
