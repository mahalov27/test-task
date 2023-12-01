import axios from "axios";

export const postRegistrationForm = async (form) => {
  const response = await axios.post(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users`, form
  );
  return response;
};