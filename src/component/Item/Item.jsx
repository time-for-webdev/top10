import React, { useState } from "react";
import styles from "./Item.module.css";
import check from "../../assects/Card/check.png";
import video from "../../assects/Item/vpny.gif";
import videox from "../../assects/Item/vpnx.mp4";
import useStartupCtx from "../Hooks/useContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Item = () => {
  const { data_list, forVpn } = useStartupCtx();
  const _data = new Date().getFullYear();
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [data_list]);

  return (
    <main className={styles.app}>
      <div className={styles.home_intro_container}>
        <div className={styles.container}>
          <h1 className={styles.underlined_header}>
            VPN Reviews You Can Trust
          </h1>
          <p className={styles.subhead}>
            Make the right choice with <a href="">unbiased VPN reviews</a> and
            in-depth advice from our team of experts.
          </p>
        </div>
        <div className={styles.video_container}>
          <video
            loop="true"
            autoplay="true"
            muted="true"
            preload="auto"
            playsinline="true"
            src={videox}
            class=""
          ></video>
          {/* <img src={video} /> */}
        </div>
        <div className={styles.roundup_tiles}>
          <div className={styles.container}>
            <p className={styles.subhead}>Get VPNs by category</p>
            <ol className={styles.list}>
              <li className={styles.list_item} data-aos="zoom-in-up">
                <a href="/Overall Best Vpn of 2023" className="">
                  <div className={styles.tile}>
                    <div className={styles.roundup_tile}>
                      <div className={styles.roundup_img}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          width="50"
                          height="40"
                          viewBox="0 0 64 48"
                        >
                          <defs>
                            <path
                              id="bb"
                              d="M2 0h213v116H0V2a2 2 0 0 1 2-2z"
                            ></path>
                            <filter
                              id="aa"
                              width="108.8%"
                              height="116.4%"
                              x="-4.4%"
                              y="-7.3%"
                              filterUnits="objectBoundingBox"
                            >
                              <feOffset
                                dy="1"
                                in="SourceAlpha"
                                result="shadowOffsetOuter1"
                              ></feOffset>
                              <feGaussianBlur
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                                stdDeviation="3"
                              ></feGaussianBlur>
                              <feColorMatrix
                                in="shadowBlurOuter1"
                                values="0 0 0 0 0.612349522 0 0 0 0 0.612349522 0 0 0 0 0.696827168 0 0 0 0.460654438 0"
                              ></feColorMatrix>
                            </filter>
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <path d="M-351-392h1440v4844H-351z"></path>
                            <g transform="translate(-76 -21)">
                              <use
                                fill="#000"
                                filter="url(#aa)"
                                href="#b"
                              ></use>
                              <use href="#bb"></use>
                            </g>
                            <g class="svg-best-trophy">
                              <path
                                fill="#eb603d"
                                fill-opacity="0.3"
                                d="M43 6l.457 14.97c0 6.159-4.99 11.153-11.149 11.153a11.107 11.107 0 0 1-8.159-3.556C31 29 36 27 39 23s4.137-12.155 4.284-16.898L43 6z"
                              ></path>
                              <path
                                fill="#eb603d"
                                d="M32.352 12.008l1.841 3.729 4.115.599-2.979 2.902.704 4.099-3.681-1.935-3.681 1.935.703-4.099-2.978-2.902 4.116-.599z"
                              ></path>
                              <path
                                stroke="#232434"
                                stroke-linejoin="round"
                                stroke-width="1.1"
                                d="M21.155 6.102v14.87c0 6.158 4.993 11.15 11.151 11.15 6.16 0 11.153-4.992 11.153-11.15V6.101H21.155z"
                              ></path>
                              <path
                                stroke="#232434"
                                stroke-linejoin="round"
                                stroke-width="1.1"
                                d="M28.695 6.102H14.547v10.48a7.074 7.074 0 0 0 6.935 7.072M35.817 6.102h14.148v10.48a7.075 7.075 0 0 1-6.831 7.07m-10.827 8.37v5.037m-8.021 4.408c.145-2.449 3.677-4.408 8.022-4.408 4.342 0 7.878 1.96 8.023 4.408H24.286z"
                              ></path>
                            </g>
                            <path
                              class="svg-best-sparkles"
                              stroke="#eb603d"
                              stroke-linecap="round"
                              d="M5.5 25l4 2m50-2l-4 2m-50 10l4-2m50 2l-4-2m-47-3.74h-4m52 0h4"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <a href="/Overall Best Vpn of 2023" className="">
                        Best VPNs of {_data}
                      </a>
                    </div>
                  </div>
                </a>
              </li>
              <li className={styles.list_item} data-aos="zoom-in-up">
                <a href={forVpn != "China" ? "/China" : "/unitedState"}>
                  <div className={styles.tile}>
                    <div className={styles.roundup_tile}>
                      <div className={styles.roundup_img}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="40"
                          viewBox="0 0 64 48"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g fill-rule="nonzero">
                              <path
                                fill="#1e2694"
                                fill-opacity=".3"
                                d="M50.5723 13.2293v4.9493H41.75l3.4777-6.5893h3.6973c.907 0 1.6433.733 1.6473 1.64zM50.5723 21.9491v12.8125c0 .9098-.7375 1.6473-1.6473 1.6473H32.1663l7.5923-14.4598h10.8137z"
                              ></path>
                              <path
                                fill="#232434"
                                d="M37.6354 18.1786l-2.1086 3.7705h4.2318l1.9914-3.7705h-4.1146zm0 0l-2.1086 3.7705h4.2318l1.9914-3.7705h-4.1146zm11.2896-7.6949h-6.9407l-.6223 1.1056h7.563c.9098 0 1.6473.7375 1.6473 1.6473v4.942h-12.937l-2.1085 3.7705h15.0455v12.8125c0 .9098-.7375 1.6473-1.6473 1.6473H27.3854l-.615 1.0982H48.925c1.5163 0 2.7455-1.2292 2.7455-2.7455V13.2293c0-1.5163-1.2292-2.7456-2.7455-2.7456zm-35.1795 1.1056h22.367l.615-1.0982h-22.982c-1.5134 0-2.7415 1.2247-2.7455 2.7382v21.5323c0 1.5163 1.2292 2.7455 2.7455 2.7455h7.7754l.615-1.0982h-8.3904c-.9098 0-1.6473-.7375-1.6473-1.6473V21.9491h18.1791l2.1086-3.7705H12.0982v-4.9493c.004-.907.7404-1.64 1.6473-1.64zm23.8899 6.5893l-2.1086 3.7705h4.2318l1.9914-3.7705h-4.1146z"
                              ></path>
                              <path
                                fill="#1e2694"
                                d="M25.7454 30.0027h-11.297v-1.0982h11.912zM14.4484 30.9545h10.7625l-.6223 1.0982H14.4484z"
                              ></path>
                              <path
                                class="svg-free-nope"
                                fill="#232434"
                                d="M41.5011 5l-3.0897 5.4837-.615 1.0983-3.7266 6.6185-2.1086 3.7486-5.0737 9.0054-.615 1.0982-2.4527 4.3562-.6223 1.0982-2.1086 3.7486 1.4424.7981 2.5625-4.5467.615-1.0982 8.1414-14.4598 2.1085-3.7486 3.7267-6.6185.6223-1.0983 2.6357-4.6857z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <a
                        href={forVpn != "China" ? "/China" : "/unitedState"}
                        className=""
                      >
                        Best VPNs for{" "}
                        {forVpn != "China" ? "China" : "unitedState"}
                      </a>
                    </div>
                  </div>
                </a>
              </li>
              <li className={styles.list_item} data-aos="zoom-in-up">
                <a
                  href={forVpn != "Andriod" ? "/Andriod" : "/Windows"}
                  className=""
                >
                  <div className={styles.tile}>
                    <div className={styles.roundup_tile}>
                      <div className={styles.roundup_img}>
                        <svg
                          width="50"
                          height="40"
                          viewBox="0 0 50 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ top: "-4px", position: "relative" }}
                        >
                          <path
                            fill="#fff"
                            d="M11.95 23.232h24.872v9.56a5 5 0 0 1-5 5H16.949a5 5 0 0 1-5-5v-9.56Z"
                          ></path>
                          <path
                            fill="#FAD4DC"
                            d="M11.95 24.232a1 1 0 0 1 1-1h22.848a1 1 0 0 1 1 1v1.402a1 1 0 0 1-.744.966l-22.85 6.033a1 1 0 0 1-1.255-.967v-7.434Z"
                            opacity=".7"
                            class="svg-gift-shadow"
                          ></path>
                          <path
                            fill="#000"
                            fill-rule="evenodd"
                            d="M35.849 24.205H12.922V36.17c0 .358.29.648.65.648H35.2c.358 0 .648-.29.648-.648V24.204Zm-22.9-.973a1 1 0 0 0-1 1V36.17c0 .895.726 1.621 1.622 1.621H35.2c.896 0 1.622-.726 1.622-1.621V24.231a1 1 0 0 0-1-1H12.949Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#ED5A78"
                            d="M21.959 23.232h4.55v14.56h-4.55z"
                          ></path>
                          <g class="svg-gift-lid">
                            <path
                              fill="#ED5A78"
                              fill-rule="evenodd"
                              d="M25.125 2.19a.973.973 0 0 1 .886.012l4.916 2.595a.973.973 0 0 1 .283 1.496l-4.916 5.708a.973.973 0 0 1-1.278.173l-.052.31a.973.973 0 0 1-1.744.416l-.597-.812a.969.969 0 0 1-.317-.01l-7.898-1.557a.973.973 0 0 1-.616-1.503l3.55-5.206a.973.973 0 0 1 1.587-.028l4.496 6.11 1.172-6.992a.973.973 0 0 1 .528-.711Zm.24 7.908 3.573-4.15-2.644-1.396-.93 5.546Zm-4.404-.269-2.785-3.785-1.945 2.853 4.73.932Z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill="#fff"
                              d="M9.985 12.953a.973.973 0 0 1 .863-1.073l24.601-2.672a.973.973 0 0 1 1.073.863l.674 6.207a.973.973 0 0 1-.863 1.072l-24.601 2.672a.973.973 0 0 1-1.073-.862l-.674-6.207Z"
                            ></path>
                            <path
                              fill="#000"
                              fill-rule="evenodd"
                              d="m35.554 10.176-24.601 2.672.674 6.207 24.601-2.672-.674-6.207ZM10.848 11.88a.973.973 0 0 0-.863 1.073l.674 6.207a.973.973 0 0 0 1.073.862l24.601-2.672a.973.973 0 0 0 .863-1.072l-.674-6.207a.973.973 0 0 0-1.073-.863L10.848 11.88Z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill="#ED5A78"
                              d="m20.834 11.711 4.523-.491.688 6.333-4.523.49z"
                            ></path>
                          </g>
                          <g class="svg-gift-lines">
                            <path
                              fill="#FAB4C2"
                              fill-rule="evenodd"
                              d="M44.947 17.276a.5.5 0 0 1-.224.671l-3.997 1.999h-.001l-.001.001a.5.5 0 0 1-.447-.894l.001-.001 3.998-2a.5.5 0 0 1 .671.224Z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill="#F78BA0"
                              fill-rule="evenodd"
                              d="M38.1 21.662a.574.574 0 0 1 .767-.268l3.882 1.872a.574.574 0 1 1-.5 1.034l-3.88-1.872a.574.574 0 0 1-.268-.766Z"
                              clip-rule="evenodd"
                            ></path>
                          </g>
                          <circle
                            class="svg-gift-dot-1"
                            cx="45"
                            cy="22"
                            r="1"
                            fill="#ED5A78"
                          ></circle>
                          <circle
                            class="svg-gift-dot-2"
                            cx="42"
                            cy="15"
                            r="1"
                            fill="#D62B4D"
                          ></circle>
                        </svg>
                      </div>
                      <a
                        href={forVpn != "Andriod" ? "/Andriod" : "/Windows"}
                        className=""
                      >
                        Best VPNs for{" "}
                        {forVpn != "Andriod" ? "Andriod" : "Windows"}
                      </a>
                    </div>
                  </div>
                </a>
              </li>
              <li className={styles.list_item} data-aos="zoom-in-up">
                <a href="/" className="">
                  <div className={styles.tile}>
                    <div className={styles.roundup_tile}>
                      <div className={styles.roundup_img}>
                        <svg
                          width="50"
                          height="40"
                          viewBox="0 0 150 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#E4F5F5"
                            fill-rule="evenodd"
                            d="M77.92 84.367h51.3c.003-.23.005-.461.005-.692 0-21.801-13.609-40.423-32.795-47.836L77.92 84.367Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            stroke="#0B524D"
                            stroke-linecap="round"
                            stroke-width="3"
                            d="m78.333 84.354 32.313-14.904"
                            class="svg-speedometer-needle"
                          ></path>
                          <path
                            fill="#000"
                            fill-rule="evenodd"
                            d="M36.811 48.862A53.906 53.906 0 0 1 74.824 33h.164a53.903 53.903 0 0 1 38.176 15.862 54.231 54.231 0 0 1 15.811 38.29v1.472h-48.08c-.614 2.714-3.099 4.744-6.07 4.744-2.973 0-5.458-2.03-6.072-4.744H21V87.15a54.235 54.235 0 0 1 15.811-38.289Zm44 36.817c-.733-2.548-3.136-4.417-5.987-4.417s-5.254 1.869-5.987 4.417H23.966a51.333 51.333 0 0 1 5.471-21.635l5.066 3.2a1.472 1.472 0 0 0 1.573-2.49l-5.235-3.306A51.176 51.176 0 0 1 47.336 44.11l2.66 4.524a1.472 1.472 0 1 0 2.539-1.493l-2.681-4.558a50.918 50.918 0 0 1 23.498-6.612v4.718a1.472 1.472 0 0 0 2.945 0v-4.727a50.914 50.914 0 0 1 22.842 6.077l-2.385 4.505a1.472 1.472 0 0 0 2.602 1.378l2.336-4.41a51.079 51.079 0 0 1 9.387 7.43 51.207 51.207 0 0 1 8.071 10.532l-5.194 3.28a1.473 1.473 0 0 0 1.573 2.49l5.023-3.173a51.335 51.335 0 0 1 5.458 21.608H80.811Z"
                            clip-rule="evenodd"
                          ></path>
                          <rect
                            class="svg-fast-lines-1"
                            width="26"
                            height="5"
                            x="13"
                            y="55"
                            fill="#1AA198"
                            stroke="#fff"
                            stroke-width="2"
                            rx="2.5"
                          ></rect>
                          <rect
                            class="svg-fast-lines-2"
                            width="26"
                            height="5"
                            x="20"
                            y="64"
                            fill="#1AA198"
                            stroke="#fff"
                            stroke-width="2"
                            rx="2.5"
                          ></rect>
                          <rect
                            class="svg-fast-lines-3"
                            width="26"
                            height="5"
                            x="14"
                            y="73"
                            fill="#1AA198"
                            stroke="#fff"
                            stroke-width="2"
                            rx="2.5"
                          ></rect>
                        </svg>
                      </div>
                      <a href="/" className="">
                        Fastest VPNs
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Item;
