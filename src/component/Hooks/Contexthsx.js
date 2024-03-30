import React, { createContext, useEffect, useState } from "react";
import { getVpn, ownerContact } from "../API/Vpn";
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
  const [forVpn, setforVpn] = useState();
  const [drop, setdrop] = useState();
  const [loading, setLoading] = useState(true);
  const [flag, setflag] = useState(false);
  const [contact, setcontact] = useState();
  const [specification, setspecification] = useState();
  useEffect(() => {
    const slug = window.location.pathname.split("/")[1];
    setforVpn(slug);
    const date = new Date().getFullYear();
    if (
      slug === `Overall Best Vpn of 2023` ||
      slug === `Overall%20Best%20Vpn%20of%202023`
    )
      setdrop(1);
    else if (
      slug === "Android" ||
      slug === "iPhone&iPad" ||
      slug === "Mac" ||
      slug === "Routers" ||
      slug === "Pc" ||
      slug === "Windows"
    ) {
      setdrop(3);
    } else if (
      slug === "China" ||
      slug === "unitedState" ||
      slug === "india" ||
      slug === "australia" ||
      slug === "burundi" ||
      slug === "unitedArabEmirates"
    ) {
      setdrop(2);
    } else {
      setforVpn(`Overall Best Vpn of 2023`);
      setdrop(1);
    }
    // console.log(slug + " " + drop);
  }, []);
  useEffect(() => {
    ownerContact((err, res) => {
      if (err) {
        return;
      }
      setcontact(res.data);
    });
  }, []);

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
          { val: res.data.Fifth },
          { val: res.data.Sixth },
          { val: res.data.Seventh },
          { val: res.data.Eighth },
          { val: res.data.Nineth },
          { val: res.data.Tenth },
        ]);
        setspecification([
          { val: res.data.Specification1 },
          { val: res.data.Specification2 },
          { val: res.data.Specification3 },
          { val: res.data.Specification4 },
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
          { val: res.data.Forth },
          { val: res.data.Fifth },
          { val: res.data.Sixth },
          { val: res.data.Seventh },
          { val: res.data.Eighth },
          { val: res.data.Nineth },
          { val: res.data.Tenth },
        ]);
        setspecification([
          { val: res.data.Specification1 },
          { val: res.data.Specification2 },
          { val: res.data.Specification3 },
          { val: res.data.Specification4 },
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
          { val: res.data.Forth },
          { val: res.data.Fifth },
          { val: res.data.Sixth },
          { val: res.data.Seventh },
          { val: res.data.Eighth },
          { val: res.data.Nineth },
          { val: res.data.Tenth },
        ]);
        setspecification([
          { val: res.data.Specification1 },
          { val: res.data.Specification2 },
          { val: res.data.Specification3 },
          { val: res.data.Specification4 },
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
        contact,
        specification,
      }}
    >
      {children}
    </vpncontext.Provider>
  );
};

export { Vpncontext, vpncontext };
