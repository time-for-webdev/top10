import React from "react";
import styles from "./Navbar.module.css";
import c_logo from "../../assects/Home/vm_new_logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [drop1, setdrop1] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const handelmousedown = () => {
    setdrop1(true);
  };
  //   console.log(drop1);
  return (
    <>
      <div className={styles.Nav_container}>
        <div className={styles.Nav_wrap}>
          <div className={styles.nav_logo_right}>
            <img src={c_logo} alt="company logo" />
          </div>
          <div className={styles.nav_right}>
            <div
              className={styles.nav_drop1}
              onMouseOver={handelmousedown}
              onMouseOut={() => setdrop1(false)}
            >
              <div
                className={drop1 ? `${styles.drop_active}` : `${styles.drop1}`}
              >
                <p>Best VPN</p>
              </div>
              <ul
                className={styles.drop1_List}
                style={drop1 ? { display: "flex" } : { display: "none" }}
              >
                <li className={styles.drop1_list_location}>
                  <p>BY SERVICE </p>
                  <ul>
                    <li>
                      <a href="">Overall Best VPN of 2023 </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.drop1_list_location}>
                  <p>BY Location</p>
                  <ul>
                    <li>
                      <a href="">China</a>
                    </li>
                    <li>
                      <a href="">USA</a>
                    </li>
                    <li>
                      <a href="">United Arab Emirates</a>
                    </li>
                    <li>
                      <a href="">Australia </a>
                    </li>
                    <li>
                      <a href="">United Kingdom </a>
                    </li>
                    <li>
                      <a href="">Canada </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.drop1_list_location}>
                  <p>BY device</p>
                  <ul>
                    <li>
                      <a href="">Android </a>
                    </li>
                    <li>
                      <a href="">iPhone & iPad </a>
                    </li>
                    <li>
                      <a href="">Mac </a>
                    </li>
                    <li>
                      <a href="">Routers </a>
                    </li>
                    <li>
                      <a href="">PC </a>
                    </li>
                    <li>
                      <a href="">Windows </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className={styles.nav_drop2}
              onClick={() => {
                setdrop2(!drop2);
              }}
            >
              <div
                className={drop2 ? `${styles.drop_active}` : `${styles.drop2}`}
              >
                <p>English</p>
              </div>
              <ul
                className={styles.drop2_list}
                style={drop2 ? { display: "flex" } : { display: "none" }}
              >
                <li>
                  <a href="">Dansk </a>
                </li>
                <li>
                  <a href="">Deutsch </a>
                </li>
                <li>
                  <a href="">Español </a>
                </li>
                <li>
                  <a data-qa-id="french" href="">
                    Français{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="croatian" href="">
                    Hrvatski{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="indonesian" href="">
                    Indonesia{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="italian" href="">
                    Italiano{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="hungarian" href="">
                    Magyar{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="dutch" href="">
                    Nederlands{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="norwegian" href="">
                    Norsk{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="polish" href="">
                    Polski{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="portuguese" href="">
                    Português{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="romanian" href="">
                    Română{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="finnish" href="">
                    Suomi{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="swedish" href="">
                    Svenska{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="vietnamese" href="">
                    Tiếng Việt{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="turkish" href="">
                    Türkçe{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="czech" href="">
                    Čeština{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="greek" href="">
                    Ελληνικά{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="russian" href="">
                    Русский{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="ukrainian" href="">
                    Українська{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="bulgarian" href="">
                    български{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="thai" href="">
                    ไทย{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="japanese" href="">
                    日本語{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="chinese" href="">
                    简体中文{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="korean" href="">
                    한국어{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="hebrew" href="">
                    עברית{" "}
                  </a>
                </li>
                <li>
                  <a data-qa-id="arabic" href="">
                    العربية{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
