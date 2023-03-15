import React from "react";
import styles from "./About.module.css";
import { useState } from "react";
const About = () => {
  const [linkClass, setlinkClass] = useState();
  // const changeActive=(e)=>{
  //   e.preventDefault();
  //   document.getElementsByClassName(styles.active).classList.add(styles.activer)
  // }
  return (
    <>
      <section className={styles.page_nav}></section>
      <div className={styles.page_nav_link}>
        <ul>
          <li>
            <a
              className={linkClass == 0 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(0);
              }}
              href="#"
            >
              We Are
            </a>
          </li>
          <li>
            <a
              className={linkClass == 1 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(1);
              }}
              href="#"
            >
              Our Values
            </a>
          </li>
          <li>
            <a
              className={linkClass == 2 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(2);
              }}
              href="#"
            >
              Review Methodology
            </a>
          </li>
          <li>
            <a
              className={linkClass == 3 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(3);
              }}
              href="#"
            >
              The Research Lab
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
