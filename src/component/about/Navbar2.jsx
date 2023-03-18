import React from "react";
import styles from "./Navbar2.module.css";
import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
const Navbar2 = ({ iv1, iv2, iv3, iv4 }) => {
  const [linkClass, setlinkClass] = useState();
  const [Dropdown, setDropdown] = useState(true);
  const [Selected, setSelected] = useState("We Are");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (iv1) { setlinkClass(0); setSelected("We Are") }
    else if (iv2) { setlinkClass(1); setSelected("Our Values") }
    else if (iv3) { setlinkClass(2); setSelected("Review Methodology") }
    else if (iv4) { setlinkClass(3); setSelected("The Research Lab") }
    else { };

    if (window.scrollY > 200) { setSticky(true) }
    else { setSticky(false) }
  });

  window.onscroll = () => {
    let temp = window.scrollY;
    if (temp > 200) { setSticky(true) }
    else { setSticky(false) }
  }

  return (
    <><section className={styles.nav_wrapper}>
      <section className={styles.page_nav} id={sticky ? `${styles.sticky_nav}` : ""}></section>
      <div className={styles.page_nav_link} id={sticky ? `${styles.sticky_link}` : ""}>
        <ul>
          <li>
            <HashLink
              className={`${linkClass == 0 ? `${styles.active}` : ""}`}
              onClick={(e) => {
                setlinkClass(0);
              }}
              smooth to="#weare"
            >
              We Are
            </HashLink>
          </li>
          <li>
            <HashLink
              className={linkClass == 1 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(1);
              }}
              smooth to="#value"
            >
              Our Values
            </HashLink>
          </li>
          <li>
            <HashLink
              className={linkClass == 2 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(2);
              }}
              smooth to="#method"
            >
              Review Methodology
            </HashLink>
          </li>
          <li>
            <HashLink
              className={linkClass == 3 ? `${styles.active}` : ``}
              onClick={(e) => {
                setlinkClass(3);
              }}
              smooth to="#lab"
            >
              The Research Lab
            </HashLink>
          </li>
        </ul>
      </div></section>
      <section className={styles.nav_wrapper2}>
        <div className={styles.about_drop} id={sticky ? `${styles.sticky_about_drop_div}` : ""}  >
          {Dropdown ? <HashLink smooth to="" onClick={() => setDropdown(false)} className={styles.drop_head} >{Selected}<p></p></HashLink>
            :
            <div className={styles.drop_items_con} onClick={() => setDropdown(true)}>
              <HashLink className={styles.drop_items} onClick={(e) => { setSelected(e.target.textContent) }} smooth to="#weare">We Are<p></p></HashLink>
              <HashLink className={styles.drop_items} onClick={(e) => { setSelected(e.target.textContent) }} smooth to="#value">Our Values</HashLink>
              <HashLink className={styles.drop_items} onClick={(e) => { setSelected(e.target.textContent) }} smooth to="#method">Review Methodology</HashLink>
              <HashLink className={styles.drop_items} onClick={(e) => { setSelected(e.target.textContent) }} smooth to="#lab">The Research Lab</HashLink>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Navbar2;
