import axios from "axios";

const domain = "http://backend.discountvpn.com/api/";

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
export const getbylocation = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/location/`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
export const getbylocationbyname = async (name, cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/location/${name}`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
export const getbydevicebyname = async (name, cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/device/${name}`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
export const getbyservicebyname = async (name, cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/service/${name}`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

/* FAQ */
export const getFaq = async (cb) => {
  const header = getHeaders();
  await axios
    .get(`${domain}/faq/`, { header })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
