import React, { useEffect } from "react";
import styles from "./Compare.module.css";
import { useState } from "react";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import privateAccessVPN from "../../assects/Home/pia_logo_hor.svg";
import cyberghost from "../../assects/Home/CyberGhost-VPN-Hor.svg";
import expressSmall from "../../assects/Home/ExpressVPN_Monogram_Logo_Red-1.svg";
import piaLogo from "../../assects/Home/logo-pia.png";
import cyberghostLogo from "../../assects/Home/logo-cyberghost.png";
import star from "../../assects/Category/star.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { AiFillSwitcher } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";
import { BiDevices } from "react-icons/bi";
import privacy from "../../assects/Category/9321857.png";
import checkMark from "../../assects/Category/checkMark.png";
import thumbUp from "../../assects/Category/thumbUp.png";
import speed from "../../assects/Category/final.png";
import lock from "../../assects/Category/lock.png";
import useStartupCtx from "../Hooks/useContext";
function Compare() {
  const [linkclass, setClass] = useState(1);
  const { data_list } = useStartupCtx();
  console.log(data_list);
  let count = 0;

  data_list.forEach((val) => {
    if (val?.val && val?.val?.Comparision) {
      count++;
    }
  });

  return (
    <>
      {count > 1 ? (
        <div id={styles.top_three} className={styles.top_three}>
          <div className={styles.container}>
            <div class="top-three__content-wrapper">
              <h3
                className={styles.section_title}
              >{`Compare Our Top ${count} VPNs `}</h3>
              <div className={styles.top_three__tabs}>
                {data_list.map((val, ind) =>
                  val?.val && val?.val?.Comparision ? (
                    <div
                      className={
                        linkclass === ind + 1
                          ? `${styles.top_three__tab_js_active}`
                          : `${styles.top_three__tab}`
                      }
                      onClick={() => {
                        setClass(ind + 1);
                      }}
                      key={ind}
                    >
                      <a
                        className={styles.top_three__tab_a}
                        // href="#tab_expressvpn"
                      >
                        <img
                          loading="lazy"
                          src={val?.val?.icon}
                          alt={
                            val?.val?.title?.charAt(0).toUpperCase() +
                            val?.val?.title?.slice(1)
                          }
                          class="img-responsive center-block"
                          width="40"
                          height="40"
                        ></img>
                      </a>
                    </div>
                  ) : null
                )}
              </div>
              <div className={styles.top_three__list}>
                {data_list.map((val, ind) =>
                  val?.val && val?.val?.Comparision && ind < 3 ? (
                    <div
                      className={
                        linkclass === ind + 1
                          ? `${styles.top_three__item_js_active}`
                          : `${styles.top_three__item}`
                      }
                      id="tab_expressvpn"
                      key={ind}
                    >
                      <a
                        aria-label="overlay-link"
                        className={styles.overlay_link}
                        href={val?.val?.website_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        data-tracked="yes"
                      ></a>
                      {ind === 0 ? (
                        <div className={styles.category__item_top_badge}>
                          <img
                            src={star}
                            alt="star"
                            style={{
                              height: "20px",
                              width: "20px",
                              marginTop: "4px",
                            }}
                          ></img>
                        </div>
                      ) : null}

                      <div className={styles.top_three__item_desc_wrap}>
                        <div className={styles.top_three__item_logo}>
                          <img
                            class="img-responsive"
                            width="180"
                            height="52"
                            loading="lazy"
                            src={val?.val?.logo}
                            alt={`Vendor Logo of ${val?.val?.Comparision?.vpn?.replace(
                              /\s/g,
                              ""
                            )} `}
                          ></img>
                        </div>

                        <p>{val?.val?.Comparision?.comparison_description}</p>
                        <div className={styles.top_three__item_desc_notice}>
                          {val?.val?.offer}
                        </div>
                      </div>

                      <h3 className={styles.top_three__item_subtitle}>
                        {val?.val?.Comparision?.vpn?.replace(/\s/g, "")}
                      </h3>
                      <div className={styles.top_three__item_features}>
                        <div className={styles.top_three__item_feature}>
                          <span
                            className={styles.top_three__item_feature_label}
                          >
                            <AiFillDollarCircle
                              className={styles.fa}
                            ></AiFillDollarCircle>
                            <small>Money back Guarantee</small>
                          </span>
                          <span
                            className={styles.top_three__item_feature_value}
                          >
                            {val?.val?.Comparision?.moneybackguarantee}
                          </span>
                        </div>
                        <div className={styles.top_three__item_feature}>
                          <span
                            className={styles.top_three__item_feature_label}
                          >
                            <BiWorld className={styles.fa}></BiWorld>
                            <small>
                              Server/
                              <br />
                              countries
                            </small>
                          </span>
                          <span
                            className={styles.top_three__item_feature_value}
                          >
                            {val?.val?.Comparision?.servers_or_countries}
                          </span>
                        </div>
                        <div className={styles.top_three__item_feature}>
                          <span
                            className={styles.top_three__item_feature_label}
                          >
                            <AiFillSwitcher
                              className={styles.fa}
                            ></AiFillSwitcher>
                            <small>Kill Switch</small>
                          </span>
                          <span
                            className={styles.top_three__item_feature_value}
                          >
                            {val?.val?.Comparision?.killswitch}
                          </span>
                        </div>
                        <div className={styles.top_three__item_feature}>
                          <span
                            className={styles.top_three__item_feature_label}
                          >
                            <BiMobile className={styles.fa}></BiMobile>
                            <small>Mobile</small>
                          </span>
                          <span
                            className={styles.top_three__item_feature_value}
                          >
                            {val?.val?.Comparision?.mobile}
                          </span>
                        </div>
                        <div className={styles.top_three__item_feature}>
                          <span
                            className={styles.top_three__item_feature_label}
                          >
                            <BiDevices className={styles.fa}></BiDevices>
                            <small>
                              Devices/
                              <br />
                              Licenses
                            </small>
                          </span>
                          <span
                            className={styles.top_three__item_feature_value}
                          >
                            {val?.val?.Comparision?.number_of_device_or_licence}
                          </span>
                        </div>
                        <div
                          className={styles.top_three__item_features_cta_wrap}
                        >
                          <a
                            className={styles.button}
                            href={val?.val?.website_url}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            data-tracked="yes"
                          >
                            Visit website
                          </a>
                        </div>
                      </div>

                      <div className={styles.top_three__item_best_for}>
                        <h3 className={styles.top_three__item_subtitle}>
                          Best VPN for
                        </h3>
                        <div className={styles.category__item_features}>
                          <a
                            aria-label="overlay_link"
                            className={styles.overlay_link}
                            href={val?.val?.website_url}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            data-tracked="yes"
                          ></a>
                          <div className={styles.category__item_features}>
                            <div className={styles.category__item_feature}>
                              <span
                                className={styles.category__item_feature_label}
                              >
                                <img
                                  style={{
                                    height: "25px",
                                    widht: "25px",
                                    marginTop: "12px",
                                  }}
                                  src={lock}
                                  alt="speed_logo"
                                ></img>
                              </span>
                              <i
                                className={styles.category__item_feature_check}
                              >
                                <img
                                  src={checkMark}
                                  alt="checkMark"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    marginTop: "2px",
                                  }}
                                ></img>
                              </i>
                              Privacy
                            </div>
                            <div className={styles.category__item_feature}>
                              <span
                                className={styles.category__item_feature_label}
                              >
                                {/* <i class="fa fa-speed"></i> */}
                                <img
                                  style={{
                                    height: "30px",
                                    widht: "30px",
                                    marginTop: "10px",
                                  }}
                                  src={speed}
                                  alt="speed_logo"
                                ></img>
                              </span>
                              <i
                                className={styles.category__item_feature_check}
                              >
                                <img
                                  src={checkMark}
                                  alt="checkMark"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    marginTop: "2px",
                                  }}
                                ></img>
                              </i>
                              Speed
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.top_three__item_price_wrap}>
                        <h3 className={styles.top_three__item_subtitle}>
                          Starting Price
                        </h3>

                        <p className={styles.top_three__item_price}>$6.67 </p>
                        <small className={styles.top_three__item_price_range}>
                          per month
                        </small>
                      </div>

                      <div className={styles.top_three__item_cta_wrap}>
                        <a
                          className={styles.button}
                          href={val?.val?.website_url}
                          onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')"
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                          data-tracked="yes"
                        >
                          Visit website
                        </a>
                        <div className={styles.wraplinkText}>
                          <a
                            className={styles.top_three__item_cta_site_link}
                            href={val?.val?.website_url}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            data-tracked="yes"
                          >
                            {`${val?.val?.Comparision?.vpn
                              ?.replace(/\s/g, "")
                              ?.toLowerCase()}.com`}
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Compare;
