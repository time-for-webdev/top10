import React from "react";
import styles from "./WeAre.module.css";
import map from "../../assects/about/map.svg";
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
                                <h2>We Are</h2>
                                <p>A team of <span className={styles.teamsize}>254</span> cybersecurity researchers, writers, and editors, all dedicated to helping you take back your online freedom</p>
                            </div>
                        </div>
                        <div className={styles.wacontent}>
                            <img src={flag} alt="worldwide" className={styles.waicon} />
                            <div className={styles.wasecond}>
                                <h2>Based In</h2>
                                <p>Over <span className={styles.countrysize}>20</span> countries across the globe</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wacontent}><img className={styles.wamap} src={map} alt="map" /></div>

                </div>
            </section>


        </>
    )
}