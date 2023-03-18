import React from "react";
import styles from "./Advantages.module.css";
import reports from "../../assects/about/reports.png";
import breach from "../../assects/about/breach.png";
import leaks from "../../assects/about/leaks.png";
export default function Advantages() {
    return (
        <>
            <section className={styles.advantages}>

                <div className={styles.advantages_wrapper}>
                    <div className={styles.advantages_card}>
                        <div className={styles.advantages_card_img}><img src={reports} alt="reports" /></div>

                        <div className={styles.advantages_description}>
                            <p className={styles.advantages_num}>95+</p>
                            <p className={styles.advantages_text}>Cybersecurity Reports Published</p>
                        </div>
                    </div>

                    <div className={styles.advantages_card}>
                        <div className={styles.advantages_card_img}><img src={breach} alt="breaches" /></div>

                        <div className={styles.advantages_description}>
                            <p className={styles.advantages_num}>70+</p>
                            <p className={styles.advantages_text}>Company Breaches Discovered</p>
                        </div>
                    </div>
                    <div className={styles.advantages_card}>
                        <div className={styles.advantages_card_img}><img src={leaks} alt="data leaks" /></div>

                        <div className={styles.advantages_description}>
                            <p className={styles.advantages_num}>BILLIONS</p>
                            <p className={styles.advantages_text}>of Leaks Found</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}