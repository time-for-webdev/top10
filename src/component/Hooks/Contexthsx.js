import React, { createContext, useEffect, useState } from "react";
import { getVpn } from "../API/Vpn";
import { getbylocation } from "../API/Vpn";
import {
  getbylocationbyname,
  getbyservicebyname,
  getbydevicebyname,
} from "../API/Vpn";
const vpncontext = createContext({});

const Vpncontext = ({ children }) => {
  const [vpn, setvpn] = useState([]);
  const [data_list, setdata_list] = useState([]);
  const [location, setlocation] = useState([]);
  const [forVpn, setforVpn] = useState("Overall Best Vpn of 2023");
  const [drop, setdrop] = useState(1);
  const [loading, setLoading] = useState(true);
  const [flag, setflag] = useState(false);

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

  useEffect(() => {
    setflag(false);
    if (drop === 1) {
      getbyservicebyname(forVpn, (err, res) => {
        if (err) return;
        setvpn(res.data);
        setdata_list([
          { val: res.data.First },
          { val: res.data.Second },
          { val: res.data.Third },
          { val: res.data.Forth },
        ]);
        setLoading(false);
        setflag(true);
        document.body.style.overflow = "visible";
      });
    } else if (drop === 2) {
      getbylocationbyname(forVpn, (err, res) => {
        if (err) return;
        setvpn(res.data);
        setdata_list([
          { val: res.data.First },
          { val: res.data.Second },
          { val: res.data.Third },
        ]);
        setLoading(false);
        setflag(true);
        document.body.style.overflow = "visible";
      });
    } else if (drop === 3) {
      getbydevicebyname(forVpn, (err, res) => {
        if (err) return;
        setvpn(res.data);
        setdata_list([
          { val: res.data.First },
          { val: res.data.Second },
          { val: res.data.Third },
        ]);
        setLoading(false);
        setflag(true);
        document.body.style.overflow = "visible";
      });
    }
  }, [forVpn]);

  if (loading) {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      setflag(true);
      document.body.style.overflow = "visible";
    }, 3000);
  }

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
        setvpn,
        data_list,
        flag,
      }}
    >
      {children}
    </vpncontext.Provider>
  );
};

export { Vpncontext, vpncontext };
