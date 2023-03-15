import React from "react";
import styles from "./About.module.css";
import { useState } from "react";
const About = () => {
  //const [linkClass, setlinkClass] = useState();
  const changeActive=(e)=>{
    e.preventDefault();
    document.getElementsByClassName(styles.active).classList.add(styles.activer)
  }
  return <>
       <section className={styles.page_nav}></section>
       <div className={styles.page_nav_link}>
        <ul>
        <li><a className={""} onClick={(e)=>changeActive(e)} href="#">We Are</a></li>
        <li><a className={styles.active} onClick={(e)=>changeActive(e)} href="#">Our Values</a></li>
        <li><a className={""} onClick={(e)=>changeActive(e)} href="#">Review Methodology</a></li>
        <li><a className={""} onClick={(e)=>changeActive(e)} href="#">The Research Lab</a></li>
       </ul>
       </div>
       
  </>;
};

export default About;
