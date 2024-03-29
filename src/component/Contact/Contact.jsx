import react from "react";
import styles from "./Contact.module.css";
import Discloser from "../Discloser/Discloser";
import Navbar from "../Navbar/Navbar";
import tele from "../../assects/Contact/telegram.jpg";
import email from "../../assects/Contact/email.png";
import fb from "../../assects/Contact/fb.png";
import twitter from "../../assects/Contact/twitter.png";
import youtube from "../../assects/Contact/youtube.png";
import { useState } from "react";
import { postContact } from "../API/contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStartupCtx from "../Hooks/useContext";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Methodology() {
  console.log(process.env.REACT_APP_SITE_KEY);
  const form = useRef();
  const { contact } = useStartupCtx();

  const [verify, setverify] = useState(false);

  const [data, setdata] = useState({
    Name: "",
    email: "",
    Comment: "",
  });

  function onChange(value) {
    // console.log("Captcha value:", value);
    setverify(true);
  }

  const handleChnage = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const sendData = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICES_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text, "send sucessfully ");
        },
        (error) => {
          console.log(error.text, "something wend wrong");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (data.Name) {
      formData.append("name", data.Name);
    }
    if (data.email) {
      formData.append("email", data.email);
    }
    if (data.Comment) {
      formData.append("Ques_comment", data.Comment);
    }
    postContact(formData, (err, res) => {
      //console.log(res);
      if (err) {
        console.log("from err");
        // alert("something went wrong! ");
        toast.error("Enter a valid email address!", {
          position: "bottom-left",
          theme: "dark",
        });
        return;
      } else {
        console.log(res.data?.success);
        if (res.data?.success === false) {
          toast.error("Enter a valid email address!", {
            position: "bottom-left",
            theme: "dark",
          });
          return;
        } else {
          sendData(e);
          toast.success("sent successfully!", {
            position: "bottom-left",
            theme: "dark",
          });
          setverify(false);
          setdata({
            Name: "",
            email: "",
            Comment: "",
          });
        }
      }
    });
  };
  return (
    <>
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
              <form ref={form} action="" onSubmit={handleSubmit}>
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  id="fname"
                  name="Name"
                  value={data.Name}
                  placeholder="Enter your name"
                  onChange={handleChnage}
                  required
                />
                <label htmlFor="lname">Email</label>
                <input
                  type="text"
                  id="lname"
                  name="email"
                  value={data.email}
                  placeholder="Enter your email address"
                  onChange={handleChnage}
                  required
                />
                <label htmlFor="subject">Questions or Comments?</label>
                <textarea
                  id="subject"
                  name="Comment"
                  placeholder="Write your questions or comments"
                  maxlength="1000"
                  value={data.Comment}
                  onChange={handleChnage}
                  required
                ></textarea>
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={onChange}
                />

                <input
                  type="submit"
                  value="Submit"
                  style={
                    verify ? {} : { cursor: "not-allowed", opacity: "0.7" }
                  }
                  className={verify ? styles.submitBtn : ""}
                  disabled={!verify}
                ></input>
              </form>
            </div>

            <div className={styles.dropline}>
              <h3>Drop us a line!</h3>
              <p>
                This is the fastest and easiest way to reach us. We read each
                message and appreciate the time you take to give us feedback.
              </p>
              <div className={styles.social_card}>
                <div className={styles.div1_in_card}>
                  <img src={tele} alt="contact us" />
                  <img src={email} alt="email" />
                </div>
                <div className={styles.div2_in_card}>
                  <div>
                    <h5>You can also follow us on social media:</h5>
                  </div>
                  <div className="social_acc">
                    <a href={contact?.Facebook}>
                      <img src={fb} alt="fb" />
                    </a>
                    <a href={contact?.Twitter}>
                      <img src={twitter} alt="twitter" />
                    </a>
                    <a href={contact?.Youtube}>
                      <img src={youtube} alt="youtube" />
                    </a>
                  </div>
                  <div>
                    <h5>Our email address:</h5>
                    <p>{contact?.Email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
