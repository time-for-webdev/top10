import React from "react";
import styles from "./Ourstory.module.css";
import people from "../../assects/about/ourStory.svg";

export default function Ourstory() {
  return (
    <>
      <section className={styles.ossection}>
        <div className={styles.oscontainer}>
          <h1>Our Story</h1>
          <p>
            It’s pretty simple — we started discount-vpn back in 2023 as a way
            to help people protect their online privacy.
          </p>
        </div>
        <div className={styles.oscontainer}>
          <img src={people} alt="people" />
        </div>
        <div className={styles.oscontainer}>
          As governments and companies around the world increasingly track and
          limit our online movements, it’s a no-brainer why many people want to
          maintain ownership of their online presence.
        </div>
      </section>
    </>
  );
}
