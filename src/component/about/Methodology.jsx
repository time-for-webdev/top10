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
            <h2 className={styles.title_content_block}>Review Methodology</h2>

            <p>
              Below are all the criteria we use to test, research, analyze, and
              track the performance of every VPN we review. As a leading
              authority on VPNs, we aim to build and maintain trust between
              consumers and the industry. Our expert team has published
              thousands of real user reviews that are backed by diligent testing
              and research.
            </p>

            <div className={styles.methodology_cards}>
              <div className={styles.methodology_card} data-aos="fade-right">
                <div className={styles.methodology_card_img}>
                  <img src={secured} alt="VPN" />
                </div>

                <div className={styles.methodology_card_info}>
                  <span className={styles.methodology_card_num}>316</span>
                  <p> VPNs Reviewed </p>{" "}
                </div>
              </div>

              <div className={styles.methodology_card} data-aos="fade-left">
                <div className={styles.methodology_card_img}>
                  <img src={review} alt="User Review" />
                </div>

                <div className={styles.methodology_card_info}>
                  <span className={styles.methodology_card_num}>17,591</span>
                  <p> Real User Reviews, Ratings </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
