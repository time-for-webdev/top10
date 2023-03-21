import React from "react";
import styles from "./Top10btm.module.css";
import web from "../../assects/Home/ppc-hero-list.svg";
import web2 from "../../assects/Home/calender.svg";

const Top10btm = () => {
  return (
    <div className={styles.bottom_container}>
      <div className={styles.btm_wrap}>
        <div className={styles.btm_para}>vpnMentor has been featured on:</div>
        {/* <img src={web} /> */}
        <div className={styles.updateDate}>
          <img src={web2} />
          <p>Updated on 16th March 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Top10btm;
