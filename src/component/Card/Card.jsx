import React from "react";
import styles from "./Card.module.css";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import check from "../../assects/Card/check.png";
import { FaWindows } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsUbuntu } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { GiWifiRouter } from "react-icons/gi";
function Card(prop) {
  // console.log(prop);
  return (
    <>
      <div className={styles.vendors}>
        <div className={styles.container}>
          <div className={styles.vendor}>
            <a
              className="overlay-link"
              data-qa-id="vendor_link"
              href={prop.val?.website_url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              data-tracked="yes"
            ></a>
            <div
              className={styles.vendor_position}
              id={prop.index > 0 ? `${styles.blue_position}` : ""}
            >
              {prop.index + 1}
            </div>
            <div
              className={styles.vendor_ribbon}
              id={prop.index > 0 ? `${styles.blue_ribbon}` : ""}
            >
              <div className={styles.vendor_ribbon_dynamic}>
                <a
                  href={prop.val?.website_url}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  data-tracked="yes"
                />

                <a
                  className={styles.dynamic__text_ribbon2}
                  href={prop.val?.website_url}
                  onclick="clickedLinkExternal('Windows - Best Ribbon', 'ExpressVPN')"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  data-tracked="yes"
                >
                  <span>{prop.val?.riben_text}</span>
                </a>
              </div>
            </div>
            <div className={styles.vendor_logoSection}>
              <div className={styles.vendor__logoSection_logo}>
                <img
                  loading="lazy"
                  src={prop.val?.logo}
                  alt="brand logo"
                  width="640"
                  height="140"
                ></img>
              </div>
              <div
                className={styles.vendor__logoSection_description}
                data-qa-id="vendor_description"
              >
                <strong>{prop.val?.description}</strong>
              </div>
              <div
                className={styles.vendor__logoSection_listing}
                data-qa-id="vendor_bullets_mobile"
              >
                <ul>
                  <li className={styles.listing__item}>
                    <img alt="logoSection_listing" src={check}></img>
                    {prop.val?.specification[0]?.description}
                  </li>
                  <li className={styles.listing__item}>
                    <img alt="logoSection_listing" src={check}></img>
                    {prop.val?.specification[1]?.description}
                  </li>
                </ul>
              </div>
              <div
                className={styles.vendor__logoSection_discount}
                data-qa-id="vendor_discount"
              >
                {prop.val?.offer}
              </div>
            </div>
            <div className={styles.vendor__featured}>
              <div className={styles.featured}>
                <ul
                  className="featured__list featured__list_desktop"
                  data-qa-id="vendor_bullets_desktop"
                >
                  {prop.val?.specification.map((el) => (
                    <li>
                      <img alt="features" src={check}></img>
                      {el?.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.available}>
                <div className={styles.available__os}>
                  <span className={styles.has_tooltip} aria-label="Windows">
                    <FaWindows />
                  </span>
                  <span className={styles.has_tooltip} aria-label="macOS">
                    <BsAndroid2 />
                  </span>
                  <span className={styles.has_tooltip} aria-label="iOS">
                    <BsApple />
                  </span>
                  <span className={styles.has_tooltip} aria-label="Android">
                    <FaLinux />
                  </span>
                  <span className={styles.has_tooltip} aria-label="Linux">
                    <GiWifiRouter />
                  </span>
                  <span class="has-tooltip" aria-label="Router">
                    <BsUbuntu />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.vendor__score_btn}>
              <div className={styles.vendor__scoreSection_first}>
                <div data-qa-id="vendor_score">
                  <svg
                    width="91"
                    height="91"
                    viewBox="0 0 42 42"
                    className={styles.donut}
                  >
                    <circle
                      className="donut-hole"
                      cx="21"
                      cy="21"
                      r="20"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="donut-ring"
                      cx="21"
                      cy="21"
                      r="20"
                      fill="transparent"
                      stroke="#37474f33"
                      stroke-width="2"
                    ></circle>
                    <circle
                      className={styles.donut_segment}
                      cx="21"
                      cy="21"
                      r="20"
                      fill="transparent"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-dasharray={`${prop.val?.rating * 10} ${
                        100 - prop.val?.rating * 10
                      }`}
                      stroke-dashoffset="0"
                    ></circle>
                    <g className="chart-text">
                      <text x="23%" y="65%" className="progress-value">
                        {prop.val?.rating < 10
                          ? (prop.val?.rating * 1.0).toFixed(1)
                          : (prop.val?.rating * 1.0).toFixed(0)}
                      </text>
                    </g>
                  </svg>
                  <div className={styles.vendor__mark} data-qa-id="vendor_mark">
                    {prop.val?.remark?.remarks}
                  </div>
                </div>
              </div>
              <div className={styles.vendor__btn}>
                <div className={styles.vendor__btn_area}>
                  <a
                    className={styles.button}
                    data-qa-id="vendor_button"
                    href={prop.val?.website_url}
                    onclick="clickedLinkExternal('Windows - Visit website', 'ExpressVPN')"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  >
                    Visit website{" "}
                  </a>
                  <a
                    className={styles.vendor__btn_site_link}
                    data-qa-id="lower_vendor_link"
                    href={prop.val?.website_url}
                    onclick="clickedLinkExternal('Windows - Vendor URL', 'ExpressVPN')"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  >
                    {prop.val?.title}.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
