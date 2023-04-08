import React from "react";
import styles from "./WeAre.module.css";
import map from "../../assects/about/map.png";
import flag from "../../assects/about/2814368.png";
import people from "../../assects/about/1769041.png";

export default function WeAre({ ref1 }) {
    return (
        <>
            <section ref={ref1} className={styles.we_are} id="weare">
                <div className={styles.wacontainer}>
                    <div className={styles.wacontainer2}>
                        <div className={styles.wacontent}>
                            <img src={people} alt="people" className={styles.waicon} />
                            <div className={styles.wafirst}>
                                <h2>Our Blogs</h2>
                                <p>Introduction to VPNs and their importance. </p><p>How to choose the right VPN for you.</p><p>Common misconceptions about VPNs debunked.</p>
                                <p>Setting up and using a VPN.</p><p>Additional resources for learning more about VPNs.</p>
                            </div>
                        </div>
                        <div className={styles.wacontent}>
            
                            <div className={styles.vendor__btn}>
                                <div className={styles.vendor__btn_area}><a
                    className={styles.button}
                    data-qa-id="vendor_button"
                    href=""
                    onclick="clickedLinkExternal('Windows - Visit website', 'ExpressVPN')"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  >
                     Visit Blogs{" "}
                  </a></div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.wacontent}><img className={styles.wamap} src={map} alt="map" /></div>

                </div>
            </section>


        </>
    )
}