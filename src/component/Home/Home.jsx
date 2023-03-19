import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import Top7 from "../top7/Top7";
import Discloser from "../Discloser/Discloser";
import Top10btm from "../top10bottom/Top10btm";
import Card from "../Card/Card";
import web from "../../assects/Home/header_background_people_default.svg";
import Category from "../Category/Category";
import Rate from "../rate/Rate";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home_container}>
        <Discloser />
        <div className={styles.first_box}>
          <div className={styles.first_left}>
            <Top7 />
            <Top10btm />
          </div>
          <img src={web} />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Rate />
        <Category />
      </div>
    </>
  );
};

export default Home;
