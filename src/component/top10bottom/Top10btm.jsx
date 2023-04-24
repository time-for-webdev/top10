import React from "react";
import styles from "./Top10btm.module.css";
import web from "../../assects/Home/ppc-hero-list.svg";
import web2 from "../../assects/Home/calender.svg";
import { last_update_time } from "../API/Vpn";
import { useEffect, useState } from "react";
const Top10btm = () => {
  const [state, setstate] = useState("");
  const [stateDate, setstateDate] = useState("");

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix = getSuffix(day);
    return `${day}${suffix} ${month} ${year}`;
  }

  function getSuffix(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = day % 100;
    const suffix =
      suffixes[
        relevantDigits >= 11 && relevantDigits <= 13 ? 0 : relevantDigits % 10
      ];
    return suffix;
  }

  useEffect(() => {
    last_update_time((err, res) => {
      if (err) return;
      setstate(res.data);
    });
  }, []);

  useEffect(() => {
    const date = formatDate(state?.last_changed_date);
    setstateDate(date);
  }, [state]);

  // console.log("from date " + stateDate);

  return (
    <div className={styles.bottom_container}>
      <div className={styles.btm_wrap}>
        <div className={styles.btm_para}>discountVpn has been featured on:</div>
        {/* <img src={web} /> */}
        <div className={styles.updateDate}>
          <img src={web2} />
          <p>{`Updated on ${stateDate}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Top10btm;
