import styles from "./RegistartionForm.module.scss";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
import useRegistrationForm from "./useRegistrationForm";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import CustomInputFile from "../CustomInputFile/CustomInputFile";
import CustomButton from "../CustumButton/CustumButton";

// eslint-disable-next-line react/prop-types
const RegistartionForm = ({ setRegistered }) => {
  const { formik, positions } = useRegistrationForm(setRegistered);

  return (
    <section id="sign-up" className={styles.section}>
      <h1>Working with GET request</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          error={!!formik.errors.name}
          id="name"
          label="Name"
          helperText={formik.errors.name}
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          sx={{ marginBottom: "50px" }}
        />
        <TextField
          error={!!formik.errors.email}
          id="email"
          label="Email"
          helperText={formik.errors.email}
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          sx={{ marginBottom: "50px" }}
        />
        <InputMask
          mask="+38 (099) 999-99-99"
          maskChar="_"
          value={formik.values.phone}
          onChange={formik.handleChange}
        >
          {(inputProps) => {
            return (
              <TextField
                error={!!formik.errors.phone}
                id="phone"
                label="Phone"
                helperText={formik.errors.phone}
                placeholder="Phone"
                sx={{ marginBottom: "4px" }}
                {...inputProps}
              />
            );
          }}
        </InputMask>
        <label className={styles.labelInput}>+38 (XXX) XXX - XX - XX</label>
        <h2>Select your position</h2>
        <ul className={styles.radioInputsList}>
          {positions &&
            positions.map(({ id, name }) => {
              return (
                <CustomRadioInput
                  key={id}
                  id={id}
                  name={name}
                  value={formik.values.position_id}
                  onChange={() => formik.setFieldValue("position_id", id)}
                />
              );
            })}
        </ul>
        <CustomInputFile
          style={{ marginBottom: "50px" }}
          onChange={(e) => formik.setFieldValue("photo", e.current.files[0])}
          error={formik.errors.photo}
        />
        <CustomButton
          type="submit"
          style={{ margin: "0 auto" }}
          data={formik.values.photo}
          disabled={!formik.isValid}
        >
          Sign up
        </CustomButton>
      </form>
    </section>
  );
};

export default RegistartionForm;
