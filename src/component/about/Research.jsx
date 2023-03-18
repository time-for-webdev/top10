import React from "react";
import styles from "./Research.module.css";
import companies from "../../assects/about/companies.svg";
export default function Research({ ref4 }) {
    return (
        <>
            <section ref={ref4} class={styles.lab_block} id="lab">

                <div class={styles.lab_wrapper}>

                    <div class={styles.lab_desc}>
                        <h2 class={styles.lab_title}>The Research Lab</h2>

                        <p>    The vpnMentor Research Lab works with data privacy agencies and computer emergency response teams (CERTs) to identify cyber threats and help protect businesses’ and organizations’ user data. We established our pro bono cybersecurity analysis team in 2019 with world-renowned analysts Noah Rotem and Ran Locar leading the charge. Since then, we’ve discovered and reported on serious security threats around the world. With this work, we’ve secured the data of over 100 million people already.
                            To find out more about the work our research lab does, please visit our press page.</p>

                    </div>
                    <div class={styles.lab_img}>
                        <img src={companies} alt="The Research Lab" />
                    </div>

                </div>

            </section>

        </>
    )
}