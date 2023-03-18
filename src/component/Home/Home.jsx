import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import Top7 from "../top7/Top7";
import Discloser from "../Discloser/Discloser";
const Home = () => {
  return (
    <>
      <Navbar />
      <Discloser />
      <Top7 />
    </>
  );
};

export default Home;
