import React from "react";
import styles from "./Card.module.css";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import check from "../../assects/Card/check.png";

function Card() {
  return (
    <>
      <div className={styles.vendors}>
        <div className={styles.container}>
          <div className={styles.vendor}>
            <a
              className="overlay-link"
              data-qa-id="vendor_link"
              href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcVendorRow_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFAO0TLCP1OK5&amp;clickout_id=1|LFAO0TLCP1OK5|1|1460"
              onclick="clickedLinkExternal('Windows - Vendor Row', 'ExpressVPN')"
              rel="nofollow noopener noreferrer"
              target="_blank"
              data-tracked="yes"
            ></a>
            <div className={styles.vendor_position}>1</div>
            <div className={styles.vendor_ribbon}>
              <div className={styles.vendor_ribbon_dynamic}>
                <a
                  href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcFastestVpnRibbon_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFAO0TLCP1OK5&amp;clickout_id=1|LFAO0TLCP1OK5|1|1460"
                  onclick="clickedLinkExternal('Windows - Fastest VPN Ribbon', 'ExpressVPN')"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  data-tracked="yes"
                >
                  <span
                    className={styles.dynamic__text_ribbon1__ribbon_desktop}
                  >
                    Get 3 Months Free
                  </span>
                  <span className={styles.dynamic__text_ribbon1__ribbon_mobile}>
                    Get 3 Months Free
                  </span>
                </a>
                <span className={styles.seperator}>|</span>
                <a
                  className={styles.dynamic__text_ribbon2}
                  href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestRibbon_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFAO0TLCP1OK5&amp;clickout_id=1|LFAO0TLCP1OK5|1|1460"
                  onclick="clickedLinkExternal('Windows - Best Ribbon', 'ExpressVPN')"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  data-tracked="yes"
                >
                  <span>30-Day Money Back Guarantee</span>
                </a>
              </div>
            </div>
            <div className={styles.vendor_logoSection}>
              <div className={styles.vendor__logoSection_logo}>
                <img
                  loading="lazy"
                  src={expresslogo}
                  alt="ExpressVPN"
                  width="640"
                  height="140"
                ></img>
              </div>
              <div
                className={styles.vendor__logoSection_description}
                data-qa-id="vendor_description"
              >
                <strong>
                  Uninterrupted, high-speed browsing, zero logs so your online
                  activity is always private.
                </strong>
              </div>
              <div
                className={styles.vendor__logoSection_listing}
                data-qa-id="vendor_bullets_mobile"
              >
                <ul>
                  <li className={styles.listing__item}>
                    <img alt="logoSection_listing" src={check}></img>
                    High-speed connections, extremely reliable &amp; secure{" "}
                  </li>
                  <li className={styles.listing__item}>
                    <img alt="logoSection_listing" src={check}></img>
                    Native, user-friendly apps for Windows 11, 10, 8 and 7{" "}
                  </li>
                </ul>
              </div>
              <div
                className={styles.vendor__logoSection_discount}
                data-qa-id="vendor_discount"
              >
                70% of our users choose EXPRESSVPN
              </div>
            </div>
            <div className={styles.vendor__featured}>
              <div className={styles.featured}>
                <ul
                  className="featured__list featured__list_desktop"
                  data-qa-id="vendor_bullets_desktop"
                >
                  <li className={styles.featured__item}>
                    <img alt="features" src={check}></img>Connects lag-free with
                    all popular platforms &amp; services
                  </li>
                  <li className={styles.featured__item}>
                    <img alt="features" src={check}></img>Native, user-friendly
                    apps for Windows 11, 10, 8 and 7
                  </li>
                  <li className={styles.featured__item}>
                    <img alt="features" src={check}></img>Low ping rate for
                    gaming, fast uploads &amp; downloading
                  </li>
                  <li className={styles.featured__item}>
                    <img alt="features" src={check}></img>No activity logs, no
                    connection logs, no data leaks
                  </li>
                  <li className={styles.featured__item}>
                    <img alt="features" src={check}></img>Try all features for
                    free for 30 days + Get 3 months free
                  </li>
                </ul>
              </div>

              <div className={styles.available}>
                <div className={styles.available__os}>
                  <span className={styles.has_tooltip} aria-label="Windows">
                    <i class="fa fa-windows" aria-hidden="false"></i>
                  </span>
                  <span className={styles.has_tooltip} aria-label="macOS">
                    <i class="fa fa-mac"></i>
                  </span>
                  <span className={styles.has_tooltip} aria-label="iOS">
                    <i class="fa fa-ios"></i>
                  </span>
                  <span className={styles.has_tooltip} aria-label="Android">
                    <i class="fa fa-android"></i>
                  </span>
                  <span className={styles.has_tooltip} aria-label="Linux">
                    <i class="fa fa-linux"></i>
                  </span>
                  <span class="has-tooltip" aria-label="Router">
                    <i class="fa fa-router"></i>
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
                      stroke-dasharray="98 2"
                      stroke-dashoffset="0"
                    ></circle>
                    <g className="chart-text">
                      <text x="23%" y="65%" className="progress-value">
                        9.8
                      </text>
                    </g>
                  </svg>
                  <div className={styles.vendor__mark} data-qa-id="vendor_mark">
                    Outstanding!
                  </div>
                </div>
              </div>
              <div className={styles.vendor__btn}>
                <div className={styles.vendor__btn_area}>
                  <a
                    className={styles.button}
                    data-qa-id="vendor_button"
                    href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCTAButton_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFBPH6EOSPAJP&amp;clickout_id=1|LFBPH6EOSPAJP|1|1460"
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
                    href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcVendorURL_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFBPH6EOSPAJP&amp;clickout_id=1|LFBPH6EOSPAJP|1|1460"
                    onclick="clickedLinkExternal('Windows - Vendor URL', 'ExpressVPN')"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    data-tracked="yes"
                  >
                    expressvpn.com{" "}
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
