import { useRef, useState } from "react";
import styles from "./CustomInputFile.module.scss";

// eslint-disable-next-line react/prop-types
const CustomInputFile = ({ onChange, style, error }) => {
  const [fileName, setFileName] = useState();
  const clicker = useRef();

  const handleChangeFile = () => {
    setFileName(clicker.current.files[0]);
    onChange(clicker);
  };

  const handleClick = (e) => {
    e.preventDefault();
    clicker.current.click();
  };

  return (
    <div className={styles.inputFile} style={{ ...style }}>
      <input
        type="file"
        ref={clicker}
        onChange={handleChangeFile}
        accept=".jpg,.jpeg"
      />
      <button className={error && styles.error} onClick={handleClick}>
        Upload
      </button>
      <p className={error && styles.error}>
        {fileName ? fileName.name : "Upload your photo"}
      </p>
    </div>
  );
};

export default CustomInputFile;
