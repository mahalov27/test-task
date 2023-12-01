import * as Yup from "yup";
import { emailRegex } from "./emailRegex";

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Need minimum 2 characters")
      .max(60, "Need maximun 60 characters")
      .required("Enter your name"),
    email: Yup.string()
      .email("Invalid email")
      .matches(emailRegex, "Invalid email")
      .required("Enter your email"),
    phone: Yup.string().required("Enter your phone"),
    position_id: Yup.string().required("Enter your position"),
    photo: Yup.mixed().required("Upload your photo"),
  })