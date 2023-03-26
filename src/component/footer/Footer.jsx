import React from "react";
import styles from "./Footer.module.css";
import c_logo from "../../assects/discount.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer_container}>
          <div className={styles.footer_wrap}>
            <div className={styles.footer_link_route}>
              <div className={styles.footer_top}>
                <img src={c_logo} alt="" />
                <p>
                  <strong>Our mission:</strong> We started vpnMentor to offer
                  users a really honest, committed and helpful tool when
                  navigating VPNs and web privacy.
                </p>
              </div>
              <div className={styles.social}>
                <p>Follow vpnMentor</p>
                <div className={styles.social_link}>
                  <a href="" target="_blank">
                    <FaFacebookSquare />
                  </a>
                  <a href="" target="_blank">
                    <FaTwitterSquare />
                  </a>
                  <a href="" target="_blank">
                    <FaYoutubeSquare />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.routes}>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions of Use</a>
              </li>
              <li>
                <a href="/">DMCA Policy</a>
              </li>
            </div>
            <hr />
            <div className={styles.copyright}>
              <p>© 2023 discountVPN | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
