import axios from "axios";

const domain = "http://piyushcse.pythonanywhere.com/api";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
};

export const getVpn = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/vpn/`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

// export const getprofile_pic = async (cb) => {
//     const headers = getHeaders();
//     await axios
//       .get(`${domain}/profileSetup/`, { headers })
//       .then((res) => cb(null, res))
//       .catch((err) => cb(err, null));
//   };
