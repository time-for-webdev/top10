import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import Top7 from "../top7/Top7";
import Discloser from "../Discloser/Discloser";
import Top10btm from "../top10bottom/Top10btm";
import Card from "../Card/Card";
import web from "../../assects/Home/GDPR-pana.png";
import Category from "../Category/Category";
import Rate from "../rate/Rate";
import Question from "../Question/Question";
import Carousel from "../carousel/Carousel";
import Compare from "../Compare/Compare";
import useStartupCtx from "../Hooks/useContext";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import AOS from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";
const Home = () => {
  /***********************VPN LIST*********************/
  const { data_list, flag } = useStartupCtx();
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [data_list]);

  return (
    <>
      <div className={styles.home_container}>
        <Discloser />
        <div className={styles.first_box}>
          <Fade left when={flag}>
            <div className={styles.first_left}>
              <Top7 />
              <Top10btm />
            </div>
          </Fade>
          <div className={styles.second_left}>
            <div className={styles.hero__image}>
              <Fade right when={flag}>
                <img src={web} />
              </Fade>
            </div>
          </div>
        </div>
        <div className={styles.vpn_card}>
          {data_list.map((val, ind) =>
            val?.val ? (
              <div data-aos="zoom-in-up">
                {" "}
                <Card key={ind} val={val?.val} index={ind} />{" "}
              </div>
            ) : null
          )}
        </div>
        <Item />
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
