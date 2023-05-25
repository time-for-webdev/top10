import React from "react";
import styles from "./Top7.module.css";
import tick from "../../assects/Home/Z68eSFI7jl042.svg";
import useStartupCtx from "../Hooks/useContext";
import { useState } from "react";
import { useEffect } from "react";
const Top7 = () => {
  const { drop, forVpn, data_list, specification } = useStartupCtx();
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
  }, [data_list]);

  return (
    <>
      <div className={styles.top_container}>
        <div className={styles.top_wrap}>
          <h1>{tittle}</h1>
          <p className={styles.top_desc}>
            with outstanding security features, extensive server networks, and
            dependable refund policies, accessing the internet securely is just
            a few clicks away.
          </p>
          <ul>
            {specification?.map((value, ind) => (
              <span>
                <img src={tick} />
                <li>{value?.val}</li>
              </span>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Top7;
