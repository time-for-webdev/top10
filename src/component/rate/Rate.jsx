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
          <h1>How We Rate Our VPNs</h1>
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
              To figure out which VPNs are worth your money, we looked at what
              each VPN offers, starting with features.
            </p>
            <p>
              When using a VPN, your priority should be security. That's why we
              chose VPNs that have military-grade encryption, a range of
              protocols (OpenVPN, L2TP, IKEv2, and more), DNS leak protection,
              and a kill-switch. We also looked at the number of servers and
              locations, and we tested each VPN for speed.
            </p>
            <p>
              We then tested each VPN's ease-of-use, from downloading and
              installing the software to connecting to the right server.
              Customer support is also a crucial aspect, so we examined each
              VPN's availability, what forms of contact are available, and how
              efficient their support team is. We compared all of that to the
              price to see if it was worthwhile or not. Last but not least, we
              analyzed our users' reviews, both the positive and the negative.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rate;
