import React from "react";
import styles from "./Top7.module.css";
import tick from "../../assects/Home/Z68eSFI7jl042.svg";
const Top7 = () => {
  return (
    <>
      <div className={styles.top_container}>
        <div className={styles.top_wrap}>
          <h1>7 Best VPNs for 2023</h1>
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
