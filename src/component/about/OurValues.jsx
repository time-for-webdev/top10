import React from "react";
import styles from "./OurValues.module.css";
import value from "../../assects/about/value.svg";
export default function OurValues({ ref2 }) {
    return (
        <>
            <section ref={ref2} className={styles.value_block} id="value">

                <div className={styles.block_content_wrapper}>
                    <div className={styles.value_img}>
                        <img src={value} alt="Ethics" />
                    </div>

                    <div className={styles.block_desc}>
                        <h2 className={styles.block_content_title}>Our Values</h2>

                        <p>Everything we do at vpnMentor is centered around providing value through honesty, transparency, and dedication. The way we test and review our VPNs is no exception, as we base all of our findings on real testing. Our main goal is to write in a way that’s not only honest, but easy to understand and relate to.</p>
                        <p>We pay full price for all the VPNs we test and use them the same way any consumer would, so we can provide unbiased reviews that are true and accurate to a real user’s experience. Our readers always come first, so we want to provide you with information that is objective and independent. We don’t accept payments to write positive reviews, skew them with unfounded bias, or ignore obvious flaws.</p>
                        <p>We do make money through affiliate commissions to pay the bills. If you click a link and purchase a VPN through that link, we may receive a commission from the sale. However, this does not affect the way we review products — we recommend VPNs that we ourselves would (and do) use on a regular basis.</p>
                        <p>Ultimately, our top priority is to help you achieve the level of privacy, security, and freedom you want online.</p>
                    </div>

                </div>



            </section>

        </>
    )
}