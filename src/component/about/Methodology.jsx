import React from "react";
import styles from "./Methodology.module.css";
import secured from "../../assects/about/secured.png";
import review from "../../assects/about/review.png";
import methodology from "../../assects/about/methodology.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import useStartupCtx from "../Hooks/useContext";
import { useEffect } from "react";
export default function Methodology({ ref3 }) {
  const { data_list, flag } = useStartupCtx();
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [data_list]);
  return (
    <>
      <section
        ref={ref3}
        className={styles.methodology_block_content}
        id="method"
      >
        <div className={styles.methodology_wrapper}>
          <div className={styles.methodology_img} data-aos="zoom-in">
            <img src={methodology} alt="Review Methodology" />
          </div>

          <div className={styles.block_content_desc}>
            <h2 className={styles.title_content_block}>Our Assessment Approach</h2>

            <p>
            As a prominent website in the field of VPNs, we are dedicated to fostering and preserving trust between consumers and the industry. Our highly skilled reviewers conduct rigorous testing and comprehensive research to generate thousands of authentic user reviews. These reviews are founded on 
            meticulous analysis and serve as a reliable resource for individuals seeking insightful information on VPN services.
            </p>

           
          </div>
        </div>
      </section>
    </>
  );
}
