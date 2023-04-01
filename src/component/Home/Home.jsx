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
import {
  getbylocationbyname,
  getbyservicebyname,
  getbydevicebyname,
} from "../API/Vpn";
import Item from "../Item/Item"
const Home = () => {
  const [data, setdata] = useState([]);
  // useEffect(() => {
  //   getVpn((err, res) => {
  //     if (err) return;
  //     setdata(res.data);
  //   });
  // }, []);

  /* for seven */
  const { drop, forVpn } = useStartupCtx();
  useEffect(() => {
    if (drop === 1) {
      getbyservicebyname(forVpn, (err, res) => {
        if (err) return;
        setdata(res.data);
      });
    } else if (drop === 2) {
      getbylocationbyname(forVpn, (err, res) => {
        if (err) return;
        setdata(res.data);
      });
    } else if (drop === 3) {
      getbydevicebyname(forVpn, (err, res) => {
        if (err) return;
        setdata(res.data);
      });
    }
  }, [forVpn]);
  // console.log(data);
  var count = 0;

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
        <div className={styles.Wrap_card}>
          {data.First ? <Card val={data.First} index={count++} /> : null}
          {data.Second ? <Card val={data.Second} index={count++} /> : null}
          {data.Third ? <Card val={data.Third} index={count++} /> : null}
          {data.Forth ? <Card val={data.Forth} index={count++} /> : null}
          {data.Fifth ? <Card val={data.Fifth} index={count++} /> : null}
          {data.Sixth ? <Card val={data.Sixth} index={count++} /> : null}
          {data.Seventh ? <Card val={data.Seventh} index={count++} /> : null}
        </div>
        <Item/>
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
