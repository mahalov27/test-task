import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { getPositions } from "../../service/getRequests";
import { validationSchema } from "./validationSchema";
import { postRegistrationForm } from "../../service/postRequests";

const useRegistrationForm = (setRegistered) => {
  const [positions, setPositions] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: 1,
      photo: null,
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: () => {
      handleSubmit();
    },
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getPositions();
        setPositions(response.data.positions);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in formik.values) {
      formData.append(key, formik.values[key]);
    }
    try {
      await postRegistrationForm(formData);
      formik.handleReset();
      setRegistered(true);
    } catch (err) {
      toast.error(err.message, {
        toastId: "Upload form of edit project",
      });
    }
  };
  return { formik, positions };
};

export default useRegistrationForm;
