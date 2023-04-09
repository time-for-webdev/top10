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
import Question from "../Question/Question";
import Carousel from "../carousel/Carousel";
import Compare from "../Compare/Compare";
import useStartupCtx from "../Hooks/useContext";
import Item from "../Item/Item";
const Home = () => {
  /***********************VPN LIST*********************/
  const { data_list } = useStartupCtx();

  return (
    <>
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
          {data_list.map((val, ind) =>
            val?.val ? <Card key={ind} val={val?.val} index={ind} /> : null
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
