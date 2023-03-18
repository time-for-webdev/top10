import React from "react";
import styles from "./OurMission.module.css";
import pin from "../../assects/about/pin.jpg";
import browser from "../../assects/about/browser.jpg";
import ipadd from "../../assects/about/ipadd.jpg";

export default function OurMission() {
    return (
        <>
            <section className={styles.our_mission}>
                <div className={styles.omcontainer}>
                    <div className={styles.omcards}>
                        <div className={styles.card}>
                            <div className={styles.imgdiv}><img src={ipadd} alt="IP" /></div>
                            <div classname={styles.omdata}><h5>Your IP Adress</h5> <p><span>000</span> <span>000</span></p></div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgdiv}><img src={pin} alt="location" /></div>
                            <div classname={styles.omdata}><h5>Location</h5> <p><span>India</span> - <span>Delhi</span></p></div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgdiv}><img src={browser} alt="browser" /></div>
                            <div classname={styles.omdata}><h5>Browser</h5> <p>Google Chrome</p></div>
                        </div>
                    </div>
                    <div className={styles.ompara}>
                        <h2>Our Mission</h2>
                        <p className={styles.para1}>
                            It’s important to us that we not only provide expert reviews, but ones that are very much based on an average user’s experience. We perform ongoing tests to ensure
                            we’re providing the most detailed and up-to-date VPN reviews an
                            d guides — and translate them into 29 languages.
                        </p>
                        <br />
                        <p className={styles.para2}>
                            As part of our mission to promote internet freedom to people around the world, we’ve also
                            created free tools to help verify your online security. Overall, we want to be your trusted source when it comes to finding the best VPNs,
                            so you can browse the web protected, and on your own terms.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}