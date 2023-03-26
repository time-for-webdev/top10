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
import Carousel from "../carousel/Carousel";
import Compare from "../Compare/Compare";
import useStartupCtx from "../Hooks/useContext";
import { getVpnstate } from "../API/Vpn";
const Home = () => {
  const [data, setdata] = useState([]);
  const [data_demo, setdata_demo] = useState([]);
  useEffect(() => {
    getVpn((err, res) => {
      if (err) return;
      setdata(res.data);
    });
  }, []);
  // console.log("for data --> " + JSON.stringify(data));
  const { vpn } = useStartupCtx();
  // console.log("-----------> " + vpn);

  useEffect(() => {
    getVpnstate((err, res) => {
      if (err) return;
      setdata_demo(res.data);
    });
  }, []);
  console.log("for demo_data" + JSON.stringify(data_demo));
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
        {/* <div className={styles.vpn_card}>
          {data.map((val, ind) => (
            <Card key={ind} val={val} index={ind} />
          ))}
        </div> */}

        <Rate />
        <Category />
        <Carousel />
        <Compare />
        <Question />
      </div>
    </>
  );
};

export default Home;
