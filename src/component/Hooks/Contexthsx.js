import React, { createContext, useEffect, useState } from "react";
import { getVpn } from "../API/Vpn";
import { getbylocation } from "../API/Vpn";
const vpncontext = createContext({});

const Vpncontext = ({ children }) => {
  const [vpn, setvpn] = useState([]);
  const [location, setlocation] = useState([]);
  const [forVpn, setforVpn] = useState("Overall Best Vpn of 2023");
  const [drop, setdrop] = useState(1);
  const [loading, setLoading] = useState(true);

  if (loading) {
    document.body.style.overflow = "hidden";
    // setTimeout(() => {
    // setLoading(false);
    // document.body.style.overflow = "visible";
    // }, 3000);
  }

  useEffect(() => {
    getVpn((err, res) => {
      if (err) return;
      setvpn(res.data.data);
    });
    getbylocation((err, res) => {
      if (err) return;
      setlocation(res.data);
    });
  }, []);
  return (
    <vpncontext.Provider
      value={{
        vpn,
        location,
        forVpn,
        setforVpn,
        drop,
        setdrop,
        loading,
        setLoading,
      }}
    >
      {children}
    </vpncontext.Provider>
  );
};

export { Vpncontext, vpncontext };
