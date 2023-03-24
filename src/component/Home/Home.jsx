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
import { useState, useEffect } from "react";
import { getVpn } from "../API/Vpn";
import Question from "../Question/Question";
import Compare from "../Compare/Compare";
const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getVpn((err, res) => {
      if (err) return;
      setdata(res.data.data);
    });
  }, []);
  //console.log(data);
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
          <div className={styles.second_left}>
            <div className={styles.hero__image}>
              <img src={web} />
            </div>
          </div>
        </div>
        <div className={styles.vpn_card}>
          {data.map((val, ind) => (
            <Card key={ind} val={val} index={ind} />
          ))}
        </div>

        <Rate />
        <Category />
        <Compare/>
        <Question/>
      </div>
    </>
  );
};

export default Home;
