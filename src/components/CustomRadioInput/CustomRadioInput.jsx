import styles from "./CustomRadioInput.module.scss";
// eslint-disable-next-line react/prop-types
const CustomRadioInput = ({ id, name, value, onChange }) => {
  return (
    <label htmlFor={id} className={styles.input} onClick={onChange}>
      <input
        className={styles.radio}
        type="radio"
        name={id}
        id={name}
        value={name}
        checked={id === value}
        onChange={onChange}
      />
      <span className={styles.customRadio}></span>
      <p>{name}</p>
    </label>
  );
};

export default CustomRadioInput;
