import React from "react";
import styles from "./Navbar.module.css";
import c_logo from "../../assects/discount-vpn.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import os1 from "../../assects/Home/icons8-android-os.svg";
import os2 from "../../assects/Home/icons8-iphone-se-48.png";
import os3 from "../../assects/Home/icons8-apple-logo-30.png";
import os4 from "../../assects/Home/icons8-wi-fi-26.png";
import os5 from "../../assects/Home/icons8-monitor-32.png";
import os6 from "../../assects/Home/icons8-windows-10-30.png";
import like from "../../assects/Home/icons8-facebook-like-50.png";
import useStartupCtx from "../Hooks/useContext";
import lookup from "country-code-lookup";
const Navbar = () => {
  const [drop1, setdrop1] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const [open, setopen] = useState(false);
  const [loaction_bool, setlocation_bool] = useState(false);
  const [device, setdevice] = useState(false);
  const [all, setall] = useState(false);
  const handelmousedown = () => {
    setdrop1(!drop1);
  };
  //   console.log(drop1);

  /* API CALL*/

  const date = new Date().getFullYear();

  const { location, setdrop, setforVpn, setLoading, forVpn } = useStartupCtx();

  // console.log("-----------> " + location);
  // const code = lookup.byCountry(location[0])?.iso2;
  // console.log(code.toLowerCase());

  return (
    <>
      <div className={styles.Nav_container}>
        <div className={styles.Nav_wrap}>
          <div
            className={styles.nav_logo_right}
            onClick={() => setLoading(true)}
          >
            <Link to="/">
              <img src={c_logo} alt="company logo" />
            </Link>
          </div>
          <div className={styles.nav_right}>
            <div
              className={styles.nav_drop1}
              onMouseOver={() => setdrop1(true)}
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
                  <Link to={`/Overall Best Vpn of 2023`}>
                    <ul>
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(1);
                          setforVpn("Overall Best Vpn of 2023");
                          setLoading(true);
                        }}
                      >
                        <div className={styles.logo_wrap_like}>
                          <img src={like} alt="" />
                        </div>
                        <p>Overall Best VPN of {date} </p>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li
                  className={`${styles.drop1_list_location} ${styles.drop1_location_scroll}`}
                >
                  <p>BY Location</p>
                  <ul>
                    {/* {location.map((val, ind) => (
                        <li
                          key={ind}
                          onClick={() => {
                            setLoading(true);
                            setdrop(2);
                            setforVpn(val);
                          }}
                        >
                          <span
                            class={`fi fi-${lookup
                              .byCountry(val)
                              ?.iso2.toLocaleLowerCase()}`}
                          ></span>
                          <p>{val}</p>
                        </li>
                      ))} */}
                    <Link to="/China">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("China");
                        }}
                      >
                        <span class={`fi fi-cn`}></span>
                        <p>China</p>
                      </li>
                    </Link>
                    <Link to="/unitedState">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("unitedState");
                        }}
                      >
                        <span class={`fi fi-us`}></span>
                        <p>United States</p>
                      </li>
                    </Link>
                    <Link to="/india">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("india");
                        }}
                      >
                        <span class={`fi fi-in`}></span>
                        <p>India</p>
                      </li>
                    </Link>
                    <Link to="/australia">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("australia");
                        }}
                      >
                        <span class={`fi fi-au`}></span>
                        <p>Australia</p>
                      </li>
                    </Link>
                    <Link to="/burundi">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("burundi");
                        }}
                      >
                        <span class={`fi fi-bi`}></span>
                        <p>Burundi</p>
                      </li>
                    </Link>
                    <Link to="/unitedArabEmirates">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(2);
                          setforVpn("unitedArabEmirates");
                        }}
                      >
                        <span class={`fi fi-ae`}></span>
                        <p>United Arab Emirates</p>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className={styles.drop1_list_location}>
                  <p>BY device</p>
                  <ul>
                    <Link to="/Android">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("Android");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os1} alt="" />
                        </div>
                        <p>Android </p>
                      </li>
                    </Link>
                    <Link to="/iPhone&iPad">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("iPhone&iPad");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os2} alt="" />
                        </div>
                        <p>iPhone & iPad </p>
                      </li>
                    </Link>
                    <Link to="/Mac">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("Mac");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os3} alt="" />
                        </div>
                        <p>Mac </p>
                      </li>
                    </Link>
                    <Link to="/Routers">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("Routers");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os4} alt="" />
                        </div>
                        <p>Routers </p>
                      </li>
                    </Link>
                    <Link to="/Pc">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("Pc");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os5} alt="" />
                        </div>
                        <p>PC </p>
                      </li>
                    </Link>
                    <Link to="/Windows">
                      <li
                        onClick={() => {
                          setLoading(true);
                          setdrop(3);
                          setforVpn("Windows");
                        }}
                      >
                        <div className={styles.logo_wrap}>
                          <img src={os6} alt="" />
                        </div>
                        <p>Windows </p>
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>

            {/*} <div
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
            </div> */}
          </div>
          <div id="google_translate_element"></div>
          <div className={styles.nav_right_mob}>
            <div
              onClick={() => {
                setopen(!open);
              }}
              className={
                open
                  ? `${styles.hamburger} ${styles.menu__burger_open}`
                  : `${styles.hamburger}`
              }
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className={
                open
                  ? `${styles.slidebar} ${styles.menu__block}`
                  : `${styles.menu__block}`
              }
            >
              {/*
              <div className={styles.slide_first}>
                <div
                  className={styles.nav_drop2}
                  onClick={() => {
                    setdrop2(!drop2);
                  }}
                >
                  <div
                    className={
                      drop2 ? `${styles.drop_active}` : `${styles.drop2}`
                    }
                  >
                    <p>English</p>
                  </div>
                  <ul
                    className={styles.drop2_list_mob}
                    style={drop2 ? { display: "block" } : { display: "none" }}
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
              </div> */}
              <div className={styles.slide_second}>
                <div
                  className={styles.nav_drop1}
                  // onMouseOut={() => setdrop1(false)}
                >
                  <div
                    className={
                      drop1 ? `${styles.drop_active}` : `${styles.drop1}`
                    }
                  >
                    <p onClick={handelmousedown}>Best VPN</p>
                  </div>
                  <ul
                    className={styles.drop1_List_mob}
                    style={drop1 ? { display: "block" } : { display: "none" }}
                  >
                    <li className={styles.drop1_list_location}>
                      <div
                        className={
                          all
                            ? `${styles.bardrop_wrap_active}`
                            : `${styles.bardrop_wrap}`
                        }
                        onClick={() => {
                          setall(!all);
                        }}
                      >
                        <span>BY SERVICE </span>
                      </div>
                      <Link to="/">
                        <ul
                          style={
                            all ? { display: "block" } : { display: "none" }
                          }
                        >
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(1);
                              setforVpn("Overall Best Vpn of 2023");
                              setopen(false);
                            }}
                          >
                            <p>Overall Best VPN of 2023 </p>
                          </li>
                        </ul>
                      </Link>
                    </li>
                    <li className={styles.drop1_list_location}>
                      <div
                        className={
                          loaction_bool
                            ? `${styles.bardrop_wrap_active}`
                            : `${styles.bardrop_wrap}`
                        }
                        onClick={() => {
                          setlocation_bool(!loaction_bool);
                        }}
                      >
                        <span>BY Location</span>
                      </div>
                      <ul
                        style={
                          loaction_bool
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        {/* {location.map((val, ind) => (
                            <li
                              key={ind}
                              onClick={() => {
                                setopen(false);
                                setLoading(true);
                                setdrop(2);
                                setforVpn(val);
                              }}
                            >
                              <p>{val}</p>
                            </li>
                          ))} */}

                        <Link to="/China">
                          <li
                            onClick={() => {
                              setopen(false);

                              setLoading(true);
                              setdrop(2);
                              setforVpn("China");
                            }}
                          >
                            <p>China</p>
                          </li>
                        </Link>
                        <Link to="/unitedState">
                          <li
                            onClick={() => {
                              setopen(false);

                              setLoading(true);
                              setdrop(2);
                              setforVpn("unitedState");
                            }}
                          >
                            <p>United States</p>
                          </li>
                        </Link>
                        <Link to="/india">
                          <li
                            onClick={() => {
                              setopen(false);

                              setLoading(true);
                              setdrop(2);
                              setforVpn("india");
                            }}
                          >
                            <p>India</p>
                          </li>
                        </Link>
                        <Link to="/australia">
                          <li
                            onClick={() => {
                              setopen(false);

                              setLoading(true);
                              setdrop(2);
                              setforVpn("australia");
                            }}
                          >
                            <p>Australia</p>
                          </li>
                        </Link>
                        <Link to="/burundi">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(2);
                              setopen(false);

                              setforVpn("burundi");
                            }}
                          >
                            <p>Burundi</p>
                          </li>
                        </Link>
                        <Link to="/unitedArabEmirates">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(2);
                              setopen(false);

                              setforVpn("unitedArabEmirates");
                            }}
                          >
                            <p>United Arab Emirates</p>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className={styles.drop1_list_location}>
                      <div
                        className={
                          device
                            ? `${styles.bardrop_wrap_active}`
                            : `${styles.bardrop_wrap}`
                        }
                        onClick={() => {
                          setdevice(!device);
                        }}
                      >
                        <span>BY device</span>
                      </div>
                      <ul
                        style={
                          device ? { display: "block" } : { display: "none" }
                        }
                      >
                        <Link to="/Android">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("Android");
                              setopen(false);
                            }}
                          >
                            <p>Android </p>
                          </li>
                        </Link>
                        <Link to="iPhone&iPad">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("iPhone&iPad");
                              setopen(false);
                            }}
                          >
                            <p>iPhone & iPad </p>
                          </li>
                        </Link>
                        <Link to="Mac">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("Mac");
                              setopen(false);
                            }}
                          >
                            <p>Mac </p>
                          </li>
                        </Link>
                        <Link to="Routers">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("Routers");
                              setopen(false);
                            }}
                          >
                            <p>Routers </p>
                          </li>
                        </Link>
                        <Link to="Pc">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("Pc");
                              setopen(false);
                            }}
                          >
                            <p>PC </p>
                          </li>
                        </Link>
                        <Link to="Windows">
                          <li
                            onClick={() => {
                              setLoading(true);
                              setdrop(3);
                              setforVpn("Windows");
                              setopen(false);
                            }}
                          >
                            <p>Windows </p>
                          </li>
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
