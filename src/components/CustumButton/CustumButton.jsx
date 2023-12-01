import styles from "./CustumButton.module.scss";

// eslint-disable-next-line react/prop-types
const CustumButton = ({ children, onClick, disabled = false, style, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={styles.btn}
      style={{ ...style }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustumButton;
