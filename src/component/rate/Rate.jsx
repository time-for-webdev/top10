import React from "react";
import styles from "./Rate.module.css";
import feature from "../../assects/Home/sliders-solid.svg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiSlider } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
const Rate = () => {
  return (
    <>
      <div className={styles.rate_container}>
        <div className={styles.rate_wrap}>
          <h1>Expert Rating Method: Unlocking the Best VPNs</h1>
          <div className={styles.rate_body}>
            <div className={styles.rate_type}>
              <li>
                <div className={styles.logo_wrap}>
                  <BiSlider />
                </div>
                <span>Features</span>
              </li>
              <li>
                <div className={styles.logo_wrap}>
                  <IoAccessibility />
                </div>
                <span>Ease of Use</span>
              </li>
              <li>
                <div className={styles.logo_wrap}>
                  <FaMoneyCheckAlt />
                </div>
                <span>Pricing</span>
              </li>
              <li>
                <div className={styles.logo_wrap}>
                  <BsFillQuestionCircleFill />
                </div>
                <span>Support</span>
              </li>
              <li>
                <div className={styles.logo_wrap}>
                  <AiFillStar />
                </div>
                <span>User Score</span>
              </li>
            </div>
            <p>
              Discover the top VPNs as we evaluate their features, including
              robust security measures like military-grade encryption,
              protocols, DNS leak protection, and kill-switches. We also
              scrutinize their performance, examining factors such as speed and
              server locations.
            </p>
            <p>
              Our comprehensive assessment considers user experience, ensuring
              easy setup and seamless usage. We assess customer support
              availability, responsiveness, and pricing to provide the best
              value. Real user reviews further guide our evaluations, allowing
              you to make an informed decision on the best VPN for your needs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rate;
