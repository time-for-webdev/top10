import React from "react";
import styles from "./OurValues.module.css";
import value from "../../assects/about/value.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import useStartupCtx from "../Hooks/useContext";
import { useEffect } from "react";
export default function OurValues({ ref2 }) {
  const { data_list, flag } = useStartupCtx();
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [data_list]);
  return (
    <>
      <section ref={ref2} className={styles.value_block} id="value">
        <div className={styles.block_content_wrapper}>
          <div className={styles.value_img} data-aos="fade-right">
            <img src={value} alt="Ethics" />
          </div>

          <div className={styles.block_desc}>
            <h2 className={styles.block_content_title}>Unmasking Excellence</h2>

            <p>At DiscountVpn.com, we value honesty, transparency, and dedication. 
              Our VPN reviews are based on real testing to provide accurate insights. 
              We purchase VPNs at full price and assess them like any consumer.
               Our objective is to offer unbiased and relatable information. 
               While we earn through affiliate commissions, it doesn't affect our reviews. 
               Our priority is empowering you with online privacy, security, and freedom.

            </p>
          </div>
        </div>
      </section>
    </>
  );
}
