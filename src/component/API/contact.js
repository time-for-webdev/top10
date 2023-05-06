import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN;

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
};

export const postContact = async (data, cb) => {
  const headers = getHeaders();
  await axios
    .post(`${domain}/form/`, data, { headers })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
