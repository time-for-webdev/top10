import react from "react";
import styles from "./Contact.module.css";
import Discloser from "../Discloser/Discloser"
import NavbarGlobal from "../about/NavbarGlobal"
import tele from "../../assects/Contact/telegram.jpg"
import email from "../../assects/Contact/email.png"
import fb from "../../assects/Contact/fb.png"
import twitter from "../../assects/Contact/twitter.png"
import youtube from "../../assects/Contact/youtube.png"
//import secured from "../../assects/Contact/secured.png";

export default function Methodology() {
    return (
        <>
            <NavbarGlobal />
            <Discloser />
            <section className={styles.contact_us}>
                <div className={styles.contact_heading}>
                    <div className={styles.headingwrapper}>
                        <h1>Contact Our Team</h1>
                        <p>Let us know what you think — we’d love to hear from you.</p>
                    </div>
                </div>
                <div className={styles.contact_content}>
                    <div className={styles.contact_wrapper}>

                        <div className={styles.form_container}>
                            <form action="">
                                <label htmlFor="fname">Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Enter your name" />

                                <label htmlFor="lname">Email</label>
                                <input type="text" id="lname" name="lastname" placeholder="Enter your email address" />


                                <label htmlFor="subject">Questions or Comments?</label>
                                <textarea id="subject" name="subject" placeholder="Write your questions or comments" maxlength="1000"></textarea>

                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>

                        <div className={styles.dropline}>
                            <h3>Drop us a line!</h3>
                            <p>
                                This is the fastest and easiest way to reach us. We read each message and appreciate the time you take to give us feedback.
                            </p>
                            <div className={styles.social_card}>
                                <div className={styles.div1_in_card}><img src={tele} alt="contact us" /><img src={email} alt="email" /></div>
                                <div className={styles.div2_in_card}>
                                    <div><h5>You can also follow us on social media:</h5></div>
                                    <div className="social_acc">
                                        <a href="https://facebook.com"><img src={fb} alt="fb" /></a>
                                        <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
                                        <a href="https:/youtube.com"><img src={youtube} alt="youtube" /></a>
                                        </div>
                                    <div><h5>Our email address:</h5><p>info@discountvpn.com</p></div>
                                </div></div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}