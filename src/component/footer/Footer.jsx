import React from "react";
import styles from "./Footer.module.css";
import c_logo from "../../assects/discount-vpn.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { useState } from "react";
import useStartupCtx from "../Hooks/useContext";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact } = useStartupCtx();
  return (
    <>
      <footer>
        <div className={styles.footer_container}>
          <div className={styles.footer_wrap}>
            <div className={styles.footer_link_route}>
              <div className={styles.footer_top}>
                <img src={c_logo} alt="" />
                <p>
                  <strong>Our Goal:</strong> At DiscountVpn.com , we aim to
                  provide users with a transparent and reliable platform to help
                  navigate VPNs and ensure web privacy
                </p>
              </div>
              <div className={styles.social}>
                <p>Follow DiscountVpn</p>
                <div className={styles.social_link}>
                  <a href={contact?.Facebook} target="_blank">
                    <FaFacebookSquare />
                  </a>
                  <a href={contact?.Twitter} target="_blank">
                    <FaTwitterSquare />
                  </a>
                  <a href={contact?.Youtube} target="_blank">
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
                <a href="https://blog.discountvpn.com/" target="_blank">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions-of-use">
                  Terms and Conditions of Use
                </a>
              </li>
              <li>
                <a href="/dmca-policy">DMCA Policy</a>
              </li>
            </div>
            <hr />
            <div className={styles.copyright}>
              <p>{`© ${currentYear} DiscountVpn | All Rights Reserved`}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
