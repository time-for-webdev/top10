import React from "react";
import styles from "./WeAre.module.css";
import blog from "../../assects/about/blog.png";
import people from "../../assects/about/1769041.png";
import AOS from "aos";
import "aos/dist/aos.css";
import useStartupCtx from "../Hooks/useContext";
import { useEffect } from "react";

export default function WeAre({ ref1 }) {
  const { data_list, flag } = useStartupCtx();
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [data_list]);
  return (
    <>
      <section ref={ref1} className={styles.we_are} id="weare">
        <div className={styles.wacontainer}>
          <div className={styles.wacontainer2}>
            <div className={styles.wacontent}>
              <img src={people} alt="people" className={styles.waicon} />
              <div className={styles.wafirst}>
                <h2>Our Blogs</h2>
                <p>Looking for insights and tips on VPNs and online privacy? </p>
                <p>
                  Our blog is the perfect place to stay up-to-date on the latest trends, news, and developments in
                  the world of online security. From reviews of the best VPNs on the market to in-depth analysis of online privacy
                  issues, our expert writers provide informative and engaging content that will help you navigate the often
                  confusing landscape of online privacy and security.</p>
                <p> Join our community of like-minded individuals and learn how to take control of your digital life.
                </p>
              </div>
            </div>
            <div className={styles.wacontent}>
              <div className={styles.vendor__btn}>
                <div className={styles.vendor__btn_area}>
                  <a
                    className={styles.button}
                    data-qa-id="vendor_button"
                    href="https://blog.discountvpn.com/"
                    onclick="clickedLinkExternal('Windows - Visit website', 'ExpressVPN')"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  >
                    Visit Blogs{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.waconten} data-aos="zoom-in-up">
            <img className={styles.wamap} src={blog} alt="map" />
          </div>
        </div>
      </section>
    </>
  );
}
