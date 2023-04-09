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
  const { vpn } = useStartupCtx();
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState([]);
  const [third, setthird] = useState([]);
  useEffect(() => {
    setfirst(vpn?.First);
    setsecond(vpn?.Second);
    setthird(vpn?.Third);
  }, [vpn]);
  // console.log("from the compare" + JSON.stringify(third));
  let count = 0;
  if (first && first?.Comparision) count++;
  if (second && second?.Comparision) count++;
  if (third && third?.Comparision) count++;

  return (
    <>
      <div id={styles.top_three} className={styles.top_three}>
        <div className={styles.container}>
          <div class="top-three__content-wrapper">
            <h3
              className={styles.section_title}
            >{`Compare Our Top ${count} VPNs `}</h3>
            <div className={styles.top_three__tabs}>
              {first && first?.Comparision ? (
                <div
                  className={
                    linkclass === 1
                      ? `${styles.top_three__tab_js_active}`
                      : `${styles.top_three__tab}`
                  }
                  onClick={() => {
                    setClass(1);
                  }}
                >
                  <a className={styles.top_three__tab_a} href="#tab_expressvpn">
                    <img
                      loading="lazy"
                      src={first?.logo}
                      alt={
                        first?.title?.charAt(0).toUpperCase() +
                        first?.title?.slice(1)
                      }
                      class="img-responsive center-block"
                      width="40"
                      height="40"
                    ></img>
                  </a>
                </div>
              ) : null}
              {second && second?.Comparision ? (
                <div
                  className={
                    linkclass === 2
                      ? `${styles.top_three__tab_js_active}`
                      : `${styles.top_three__tab}`
                  }
                  onClick={() => {
                    setClass(2);
                  }}
                >
                  <a
                    className={styles.top_three__tab_a}
                    href="#tab_privateinternetaccess"
                  >
                    <img
                      loading="lazy"
                      src={second?.logo}
                      alt={
                        second?.title?.charAt(0).toUpperCase() +
                        second?.title?.slice(1)
                      }
                      class="img-responsive center-block"
                      width="40"
                      height="40"
                    ></img>
                  </a>
                </div>
              ) : null}
              {third && third?.Comparision ? (
                <div
                  className={
                    linkclass === 3
                      ? `${styles.top_three__tab_js_active}`
                      : `${styles.top_three__tab}`
                  }
                  onClick={() => {
                    setClass(3);
                  }}
                >
                  <a
                    className={styles.top_three__tab_a}
                    href="#tab_cyberghostvpn"
                  >
                    <img
                      loading="lazy"
                      src={third?.logo}
                      alt={
                        third?.title?.charAt(0).toUpperCase() +
                        third?.title?.slice(1)
                      }
                      class="img-responsive center-block"
                      width="40"
                      height="40"
                    ></img>
                  </a>
                </div>
              ) : null}
            </div>
            <div className={styles.top_three__list}>
              {first && first?.Comparision ? (
                <div
                  className={
                    linkclass === 1
                      ? `${styles.top_three__item_js_active}`
                      : `${styles.top_three__item}`
                  }
                  id="tab_expressvpn"
                >
                  <a
                    aria-label="overlay-link"
                    className={styles.overlay_link}
                    href={first?.website_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  ></a>
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

                  <div className={styles.top_three__item_desc_wrap}>
                    <div className={styles.top_three__item_logo}>
                      <img
                        class="img-responsive"
                        width="180"
                        height="52"
                        loading="lazy"
                        src={first?.logo}
                        alt={`Vendor Logo of ${first?.Comparision?.vpn?.replace(
                          /\s/g,
                          ""
                        )} `}
                      ></img>
                    </div>

                    <p>{first?.Comparision?.comparison_description}</p>
                    <div className={styles.top_three__item_desc_notice}>
                      {first?.offer}
                    </div>
                  </div>

                  <h3 className={styles.top_three__item_subtitle}>
                    {first?.Comparision?.vpn?.replace(/\s/g, "")}
                  </h3>
                  <div className={styles.top_three__item_features}>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillDollarCircle
                          className={styles.fa}
                        ></AiFillDollarCircle>
                        <small>Money back Guarantee</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {first?.Comparision?.moneybackguarantee}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiWorld className={styles.fa}></BiWorld>
                        <small>
                          Server/
                          <br />
                          countries
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {first?.Comparision?.servers_or_countries}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                        <small>Kill Switch</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {first?.Comparision?.killswitch}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiMobile className={styles.fa}></BiMobile>
                        <small>Mobile</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {first?.Comparision?.mobile}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiDevices className={styles.fa}></BiDevices>
                        <small>
                          Devices/
                          <br />
                          Licenses
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {first?.Comparision?.number_of_device_or_licence}
                      </span>
                    </div>
                    <div className={styles.top_three__item_features_cta_wrap}>
                      <a
                        className={styles.button}
                        href={first?.website_url}
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
                        href={first?.website_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        data-tracked="yes"
                      ></a>
                      <div className={styles.category__item_features}>
                        <div className={styles.category__item_feature}>
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                      href={first?.website_url}
                      onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      Visit website
                    </a>

                    <a
                      className={styles.top_three__item_cta_site_link}
                      href={first?.website_url}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      {`${first?.Comparision?.vpn
                        ?.replace(/\s/g, "")
                        ?.toLowerCase()}.com`}
                    </a>
                  </div>
                </div>
              ) : null}
              {second && second?.Comparision ? (
                <div
                  className={
                    linkclass === 2
                      ? `${styles.top_three__item_js_active}`
                      : `${styles.top_three__item}`
                  }
                  id="tab_expressvpn"
                >
                  <a
                    aria-label="overlay-link"
                    className={styles.overlay_link}
                    href={second?.website_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  ></a>
                  <div className={styles.top_three__item_desc_wrap}>
                    <div className={styles.top_three__item_logo}>
                      <img
                        class="img-responsive"
                        width="180"
                        height="52"
                        loading="lazy"
                        src={second?.logo}
                        alt={`Vendor Logo of ${second?.Comparision?.vpn?.replace(
                          /\s/g,
                          ""
                        )}`}
                      ></img>
                    </div>

                    <p>{second?.Comparision?.comparison_description}</p>
                    <div className={styles.top_three__item_desc_notice}>
                      {second?.offer}
                    </div>
                  </div>

                  <h3 className={styles.top_three__item_subtitle}>
                    {second?.Comparision?.vpn?.replace(/\s/g, "")}
                  </h3>
                  <div className={styles.top_three__item_features}>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillDollarCircle
                          className={styles.fa}
                        ></AiFillDollarCircle>
                        <small>Money back Guarantee</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {second?.Comparision?.moneybackguarantee}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiWorld className={styles.fa}></BiWorld>
                        <small>
                          Server/
                          <br />
                          countries
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {second?.Comparision?.servers_or_countries}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                        <small>Kill Switch</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {second?.Comparision?.killswitch}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiMobile className={styles.fa}></BiMobile>
                        <small>Mobile</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {second?.Comparision?.mobile}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiDevices className={styles.fa}></BiDevices>
                        <small>
                          Devices/
                          <br />
                          Licenses
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {second?.Comparision?.number_of_device_or_licence}
                      </span>
                    </div>
                    <div className={styles.top_three__item_features_cta_wrap}>
                      <a
                        className={styles.button}
                        href={second?.website_url}
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
                        href={second?.website_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        data-tracked="yes"
                      ></a>
                      <div className={styles.category__item_features}>
                        <div className={styles.category__item_feature}>
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                      href={second?.website_url}
                      onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      Visit website
                    </a>

                    <a
                      className={styles.top_three__item_cta_site_link}
                      href={second?.website_url}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      {`${second?.Comparision?.vpn
                        ?.replace(/\s/g, "")
                        ?.toLowerCase()}.com`}
                    </a>
                  </div>
                </div>
              ) : null}
              {third && third?.Comparision ? (
                <div
                  className={
                    linkclass === 3
                      ? `${styles.top_three__item_js_active}`
                      : `${styles.top_three__item}`
                  }
                  id="tab_expressvpn"
                >
                  <a
                    aria-label="overlay-link"
                    className={styles.overlay_link}
                    href={third?.website_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  ></a>
                  <div className={styles.top_three__item_desc_wrap}>
                    <div className={styles.top_three__item_logo}>
                      <img
                        class="img-responsive"
                        width="180"
                        height="52"
                        loading="lazy"
                        src={third?.logo}
                        alt={`Vendor Logo of ${third?.Comparision?.vpn?.replace(
                          /\s/g,
                          ""
                        )}`}
                      ></img>
                    </div>

                    <p>{third?.Comparision?.comparison_description}</p>
                    <div className={styles.top_three__item_desc_notice}>
                      {third?.offer}
                    </div>
                  </div>

                  <h3 className={styles.top_three__item_subtitle}>
                    {third?.Comparision?.vpn?.replace(/\s/g, "")}
                  </h3>
                  <div className={styles.top_three__item_features}>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillDollarCircle
                          className={styles.fa}
                        ></AiFillDollarCircle>
                        <small>Money back Guarantee</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {third?.Comparision?.moneybackguarantee}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiWorld className={styles.fa}></BiWorld>
                        <small>
                          Server/
                          <br />
                          countries
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {third?.Comparision?.servers_or_countries}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                        <small>Kill Switch</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {third?.Comparision?.killswitch}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiMobile className={styles.fa}></BiMobile>
                        <small>Mobile</small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {third?.Comparision?.mobile}
                      </span>
                    </div>
                    <div className={styles.top_three__item_feature}>
                      <span className={styles.top_three__item_feature_label}>
                        <BiDevices className={styles.fa}></BiDevices>
                        <small>
                          Devices/
                          <br />
                          Licenses
                        </small>
                      </span>
                      <span className={styles.top_three__item_feature_value}>
                        {third?.Comparision?.number_of_device_or_licence}
                      </span>
                    </div>
                    <div className={styles.top_three__item_features_cta_wrap}>
                      <a
                        className={styles.button}
                        href={third?.website_url}
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
                        href={third?.website_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        data-tracked="yes"
                      ></a>
                      <div className={styles.category__item_features}>
                        <div className={styles.category__item_feature}>
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                          <span className={styles.category__item_feature_label}>
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
                          <i className={styles.category__item_feature_check}>
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
                      href={third?.website_url}
                      onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      Visit website
                    </a>

                    <a
                      className={styles.top_three__item_cta_site_link}
                      href={third?.website_url}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      data-tracked="yes"
                    >
                      {`${third?.Comparision?.vpn
                        ?.replace(/\s/g, "")
                        ?.toLowerCase()}.com`}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
