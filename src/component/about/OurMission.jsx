import React from "react";
import styles from "./OurMission.module.css";
import pin from "../../assects/about/pin.jpg";
import browser from "../../assects/about/browser.jpg";
import ipadd from "../../assects/about/ipadd.jpg";
import { useState, useEffect } from "react";
export default function OurMission() {
  const [ipAddress, setIpAddress] = useState("");
  const [browserDevice, setBrowser] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org/?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error(error);
      }
    };

    const getBrowser = () => {
      let ua = navigator.userAgent;
      let browserName = navigator.appName;
      let fullVersion = "" + parseFloat(navigator.appVersion);
      let nameOffset, verOffset;

      if ((verOffset = ua.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = ua.substring(verOffset + 6);
        if ((verOffset = ua.indexOf("Version")) != -1)
          fullVersion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = ua.substring(verOffset + 5);
      } else if ((verOffset = ua.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = ua.substring(verOffset + 7);
      } else if ((verOffset = ua.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = ua.substring(verOffset + 7);
        if ((verOffset = ua.indexOf("Version")) != -1)
          fullVersion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = ua.substring(verOffset + 8);
      } else if (
        (nameOffset = ua.lastIndexOf(" ") + 1) <
        (verOffset = ua.lastIndexOf("/"))
      ) {
        browserName = ua.substring(nameOffset, verOffset);
        fullVersion = ua.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
          browserName = navigator.appName;
        }
      }
      if ((verOffset = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, verOffset);
      if ((verOffset = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, verOffset);

      setBrowser(`${browserName}`);
    };

    getBrowser();
    getIpAddress();
  }, []);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://ipapi.co/${ipAddress}/country_name/`
        );
        const data = await response.text();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, [ipAddress]);

  return (
    <>
      <section className={styles.our_mission}>
        <div className={styles.omcontainer}>
          <div className={styles.omcards}>
            <div className={styles.card}>
              <div className={styles.imgdiv}>
                <img src={ipadd} alt="IP" />
              </div>
              <div classname={styles.omdata}>
                <h5>Your IP Adress</h5>{" "}
                <p>
                  <span>{ipAddress}</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imgdiv}>
                <img src={pin} alt="location" />
              </div>
              <div classname={styles.omdata}>
                <h5>Location</h5>{" "}
                <p>
                  <span>{country}</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imgdiv}>
                <img src={browser} alt="browser" />
              </div>
              <div classname={styles.omdata}>
                <h5>Browser</h5> <p>{browserDevice}</p>
              </div>
            </div>
          </div>
          <div className={styles.ompara}>
            <h2>Our Mission</h2>
            <p className={styles.para1}>
              It’s important to us that we not only provide expert reviews, but
              ones that are very much based on an average user’s experience. We
              perform ongoing tests to ensure we’re providing the most detailed
              and up-to-date VPN reviews an d guides — and translate them into
              29 languages.
            </p>
            <br />
            <p className={styles.para2}>
              As part of our mission to promote internet freedom to people
              around the world, we’ve also created free tools to help verify
              your online security. Overall, we want to be your trusted source
              when it comes to finding the best VPNs, so you can browse the web
              protected, and on your own terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
