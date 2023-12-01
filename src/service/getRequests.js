import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getUserList = async (page) => {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users/?page=${
      page ? page : "1"
    }&count=6`
  );
  return response;
};

export const getPositions = async () => {
  const response = await axios.get(
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions/"
  );
  return response;
};

export const getToken = async () => {
  const response = await axios.get(
    "https://frontend-test-assignment-api.abz.agency/api/v1/token/"
  );
  console.log(response.data.token)
  setAuthHeader(response.data.token);
};
