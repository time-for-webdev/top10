import React from "react";
import styles from "./Top7.module.css";
import tick from "../../assects/Home/Z68eSFI7jl042.svg";
import useStartupCtx from "../Hooks/useContext";
import { useState } from "react";
import { useEffect } from "react";
const Top7 = () => {
  const { drop, forVpn } = useStartupCtx();
  const currentDate = new Date().getFullYear();
  const [tittle, setTittle] = useState();
  const getval = () => {
    let val = `Best VPNs to use in ${currentDate}`;
    if (drop === 2) {
      val = `Best VPNs for ${forVpn} in ${currentDate}`;
    } else if (drop === 3) {
      val = ` ${currentDate} Best VPNs for ${forVpn}`;
    }
    setTittle(val);
  };
  useEffect(() => {
    getval();
  }, [drop]);

  return (
    <>
      <div className={styles.top_container}>
        <div className={styles.top_wrap}>
          <h1>{tittle}</h1>
          <p className={styles.top_desc}>
            Excellent security features, widespread server networks, and
            reliable refund policies — secure internet access is just a few
            clicks away.
          </p>
          <ul>
            <span>
              <img src={tick} />
              <li>
                <b>Fast servers </b> to browse without interruptions
              </li>
            </span>
            <span>
              <img src={tick} />
              <li>
                <b>Strict no-logs policies </b> keep your data private online
              </li>
            </span>
            <span>
              <img src={tick} />
              <li>
                <b>Large server networks </b> to connect to any location
              </li>
            </span>
            <span>
              <img src={tick} />
              <li>
                <b>Free trials, discounts, and refund policies </b> to test them
                out risk-free
              </li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Top7;
