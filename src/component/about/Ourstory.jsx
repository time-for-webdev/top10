import React from "react";
import styles from "./Ourstory.module.css";
import people from "../../assects/about/ourStory.svg";

export default function Ourstory() {
  return (
    <>
      <section className={styles.ossection}>
        <div className={styles.oscontainer}>
          <h1>Our Journey</h1>
          <p>
            Our journey began with a passion for helping users navigate the
            complex world of VPNs and protect their online privacy. Frustrated
            with the lack of honest and committed resources available, we
            founded discountVpn to fill this gap. Our dedicated team is
            committed to providing unbiased and helpful information, guiding
            users towards the best VPN solutions tailored to their needs.
          </p>
        </div>
        <div className={styles.oscontainer}>
          <img src={people} alt="people" />
        </div>
        <div className={styles.oscontainer} style={{ marginBottom: "2rem" }}>
          Take Charge of Your Online Presence: Defy Restrictions and Embrace
          Freedom! <br /> <br />
          As the world tightens its grip on our digital lives, reclaiming
          ownership of your online presence becomes paramount. Don't let
          governments and corporations dictate your movements - break free from
          limitations and seize control of your digital destiny. With
          discountVpn, you can trust that you're getting reliable insights and
          tools to safeguard your online journey Join the revolution and
          experience the true meaning of online freedom.
        </div>
      </section>
    </>
  );
}
