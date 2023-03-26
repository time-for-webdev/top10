import React, { createContext, useEffect, useState } from "react";
import { getVpn } from "../API/Vpn";

const vpncontext = createContext({});

const Vpncontext = ({ children }) => {
  const [vpn, setvpn] = useState([]);
  // const [forVpn,setforVpn]=useState("all");
  useEffect(() => {
    getVpn((err, res) => {
      if (err) return;
      setvpn(res.data.data);
    });
  }, []);
  return <vpncontext.Provider value={{ vpn }}>{children}</vpncontext.Provider>;
};

export { Vpncontext, vpncontext };
