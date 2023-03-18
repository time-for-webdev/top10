import React from "react";
import styles from "./Team.module.css";
import Benj from "../../assects/about/Benj.jpg";
import Diana from "../../assects/about/Diana.png";
import girl1 from "../../assects/about/girl1.jpg";
import girl2 from "../../assects/about/girl2.jpg";
import Kristi from "../../assects/about/Kristi.jpg";

export default function Team() {
    return (
        <>
            <section className={styles.team}>
                <div className={styles.container}>
                    <h2 className={styles.title_block}>The Team</h2>


                    <div className={styles.team_wrapper}>

                        <div className={styles.team_card}>


                            <div className={styles.team_avatar}>
                                <img src={Diana} alt="Diana" />
                            </div>

                            <div className={styles.team_desc}>
                                <h5 className={styles.team_name}>Diana Melnic</h5>
                                <p className={styles.team_sub_name}>Lead Editor</p>
                                <p className={styles.team_text}>Favorite VPN: Private Internet Access</p>
                            </div>
                        </div>


                        <div className={styles.team_card}>


                            <div className={styles.team_avatar}>
                                <img src={girl1} alt="girl1" />
                            </div>

                            <div className={styles.team_desc}>
                                <h5 className={styles.team_name}>Kate Richards</h5>
                                <p className={styles.team_sub_name}>Managing Editor</p>
                                <p className={styles.team_text}>Favorite VPN: ExpressVPN</p>
                            </div>
                        </div>


                        <div className={styles.team_card}>


                            <div className={styles.team_avatar}>
                                <img src={girl2} alt="girl2" />
                            </div>

                            <div className={styles.team_desc}>
                                <h5 className={styles.team_name}>Anneke van Aswegen</h5>
                                <p className={styles.team_sub_name}>Managing Editor</p>
                                <p className={styles.team_text}>Favorite VPN: ExpressVPN</p>
                            </div>
                        </div>


                        <div className={styles.team_card}>


                            <div className={styles.team_avatar}>
                                <img src={Kristi} alt="Kristi" />
                            </div>

                            <div className={styles.team_desc}>
                                <h5 className={styles.team_name}>Ben Lawson</h5>
                                <p className={styles.team_sub_name}>Managing Editor</p>
                                <p className={styles.team_text}>Favorite VPN: CyberGhost VPN</p>
                            </div>
                        </div>


                        <div className={styles.team_card}>


                            <div className={styles.team_avatar}>
                                <img src={Benj} alt="Benj" />
                            </div>

                            <div className={styles.team_desc}>
                                <h5 className={styles.team_name}>Kristina Joshevska</h5>
                                <p className={styles.team_sub_name}>Managing Editor</p>
                                <p className={styles.team_text}>Favorite VPN: ExpressVPN</p>
                            </div>
                        </div>


                    </div>


                </div>

            </section>
        </>
    )
}