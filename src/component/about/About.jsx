import React from "react";
import Navbar2 from "./Navbar2";
import Ourstory from "./Ourstory";
import WeAre from "./WeAre";
import OurMission from "./OurMission";
import Team from "./Team";
import OurValues from "./OurValues";
import Methodology from "./Methodology";
import Research from "./Research";
import Advantages from "./Advantages";
import NavbarGlobal from "./NavbarGlobal";
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref: ref1, inView: iv1 } = useInView();
  const { ref: ref2, inView: iv2 } = useInView();
  const { ref: ref3, inView: iv3 } = useInView();
  const { ref: ref4, inView: iv4 } = useInView();
  return (
    <>
      <NavbarGlobal />
      <Navbar2 iv1={iv1} iv2={iv2} iv3={iv3} iv4={iv4} />
      <Ourstory />
      <WeAre ref1={ref1} />
      <OurMission />
      <Team />
      <OurValues ref2={ref2} />
      <Methodology ref3={ref3} />
      <Research ref4={ref4} />
      <Advantages />
    </>
  )
}