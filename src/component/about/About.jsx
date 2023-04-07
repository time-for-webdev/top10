import React from "react";
import Navbar2 from "./Navbar2";
import Ourstory from "./Ourstory";
import WeAre from "./WeAre";
import OurMission from "./OurMission";

import OurValues from "./OurValues";
import Methodology from "./Methodology";

import Navbar from "../Navbar/Navbar";
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref: ref1, inView: iv1 } = useInView();
  const { ref: ref2, inView: iv2 } = useInView();
  const { ref: ref3, inView: iv3 } = useInView();

  return (
    <>
      <Navbar />
      <Navbar2 iv1={iv1} iv2={iv2} iv3={iv3}  />
      <Ourstory />
      <WeAre ref1={ref1} />
      <OurMission />
  
      <OurValues ref2={ref2} />
      <Methodology ref3={ref3} />
      
      
    </>
  )
}