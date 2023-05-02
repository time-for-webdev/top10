import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import fivestar from "../../assects/Home/fivestar.png";
import fourhalfstar from "../../assects/Home/fourhalfstar.png";
import useStartupCtx from "../Hooks/useContext";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

export default function Carousel() {
  const [activecard, setactivecard] = useState(0);
  const [cardcnt, setcardcnt] = useState(0);
  const [prevTouch, setprevTouch] = useState(0);
  const [currTouch, setcurrTouch] = useState(0);
  const [isDragging, setisDragging] = useState(false);
  const [move, setmove] = useState([
    "translateX(-70%)",
    "translateX(-150%)",
    "translateX(-230%)",
    "translateX(-310%)",
    "translateX(-390%)",
    "translateX(-470%)",
    "translateX(-550%)",
    "translateX(-630%)",
    "translateX(-710%)",
    "translateX(-790%)",
  ]);
  const [moveM, setmoveM] = useState([
    "translateX(-12%)",
    "translateX(-52%)",
    "translateX(-92%)",
    "translateX(-132%)",
    "translateX(-172%)",
    "translateX(-212%)",
    "translateX(-252%)",
    "translateX(-292%)",
    "translateX(-332%)",
    "translateX(-372%)",
  ]);
  const myRef = useRef();

  /*****************VPN LIST*************************/
  const { data_list } = useStartupCtx();
  // console.log(data_list);
  useEffect(() => {
    data_list.map((el, ind) => {
      if (el.val) {
        setcardcnt(ind);
      }
    });
    // console.log(cardcnt);
  }, [data_list]);

  //*************** drag for touchscreen************/
  const dragStart = (e) => {
    setprevTouch(e.touches[0].pageX);
  };
  const dragging = (e) => {
    setcurrTouch(e.touches[0].pageX);
    setisDragging(true);
  };
  const dragStop = (e) => {
    if (!isDragging) return;
    if (currTouch - prevTouch > 25) {
      setactivecard(activecard - 1);
    } else if (currTouch - prevTouch < -25) {
      setactivecard(activecard + 1);
    }
    setisDragging(false);
    if (activecard < 0) {
      setactivecard(cardcnt);
    } else if (activecard > cardcnt) {
      setactivecard(0);
    }
  };

  /****************drag for mouse***********/
  const dragStartM = (e) => {
    setprevTouch(e.pageX);
  };
  const draggingM = (e) => {
    setcurrTouch(e.pageX);
    setisDragging(true);
  };
  const dragStopM = (e) => {
    if (!isDragging) return;
    if (currTouch - prevTouch > 20) {
      setactivecard(activecard - 1);
    } else if (currTouch - prevTouch < -20) {
      setactivecard(activecard + 1);
    }
    setisDragging(false);
    if (activecard < 0) {
      setactivecard(cardcnt);
    } else if (activecard > cardcnt) {
      setactivecard(0);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1051) {
      myRef.current.style.transform = move[activecard];
    } else {
      myRef.current.style.transform = moveM[activecard];
    }

    if (activecard < 0) {
      setactivecard(cardcnt);
    } else if (activecard > cardcnt) {
      setactivecard(0);
    }
  });

  return (
    <>
      <section className={styles.carousel_sec}>
        <h2>User Reviews</h2>
        <p className={styles.not_verified}>(User reviews are not verified)</p>

        <div
          className={styles.card_wrapper}
          ref={myRef}
          onTouchStart={dragStart}
          onTouchMove={dragging}
          onTouchEnd={dragStop}
          onMouseDown={dragStartM}
          onMouseMove={draggingM}
          onMouseUp={dragStopM}
        >
          <div className={styles.carousel_card}>
            <div className={styles.brand_logo}>
              <img src={data_list[cardcnt]?.val?.icon} alt="brandlogo" />
            </div>
            <div className={styles.brand_review}>
              <h3>{data_list[cardcnt]?.val?.title}</h3>
              {/* <img
                src={
                  parseFloat(data_list[cardcnt]?.val?.user_rating) > 4.5
                    ? fivestar
                    : fourhalfstar
                }
                alt="5 star review"
              /> */}
              <div className={styles?.starswrap}>
                {parseFloat(data_list[cardcnt]?.val?.user_rating) > 4.5 ? (
                  <div className={styles.floorstar}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                ) : (
                  <div className={styles.floorstar}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                )}
              </div>
              <p className={styles.user_review}>
                {data_list[cardcnt]?.val?.user_comment}
              </p>
              <p className={styles.user_name}>
                {data_list[cardcnt]?.val?.user_name}
              </p>
              <a className={styles.button}>Visit website</a>
            </div>
          </div>

          {data_list.map((el, ind) => {
            return el?.val ? (
              <div
                className={styles.carousel_card}
                id={activecard == ind ? `${styles.active_card}` : ""}
              >
                <div className={styles.brand_logo}>
                  <img draggable="false" src={el?.val?.icon} alt="brandlogo" />
                </div>
                <div className={styles.brand_review}>
                  <h3>{el.val?.title}</h3>
                  <div className={styles?.starswrap}>
                    {parseFloat(el.val?.user_rating) > 4.5 ? (
                      <div className={styles.floorstar}>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                      </div>
                    ) : (
                      <div className={styles.floorstar}>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    )}
                  </div>

                  <p className={styles.user_review}>{el.val?.user_comment}</p>
                  <p className={styles.user_name}>{el.val?.user_name}</p>
                  <a className={styles.button} href={el.val?.website_url}>
                    Visit Website
                  </a>
                </div>
              </div>
            ) : null;
          })}

          <div className={styles.carousel_card}>
            <div className={styles.brand_logo}>
              <img src={data_list[0]?.val?.icon} alt="brandlogo" />
            </div>
            <div className={styles.brand_review}>
              <h3>{data_list[0]?.val?.title}</h3>
              {/* <img
                src={
                  parseFloat(data_list[0]?.val?.user_rating) > 4.5
                    ? fivestar
                    : fourhalfstar
                }
                alt="5 star review"
              /> */}
              <div className={styles?.starswrap}>
                {parseFloat(data_list[0]?.val?.user_rating) > 4.5 ? (
                  <div className={styles.floorstar}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                ) : (
                  <div className={styles.floorstar}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                )}
              </div>
              <p className={styles.user_review}>
                {data_list[0]?.val?.user_comment}
              </p>
              <p className={styles.user_name}>{data_list[0]?.val?.user_name}</p>
              <a className={styles.button}>Visit website</a>
            </div>
          </div>
        </div>

        <div className={styles.slider_controls}>
          {data_list.map((el, ind) => {
            return el?.val ? (
              <span
                className={activecard == ind ? `${styles.active_control}` : ""}
                onClick={(e) => {
                  setactivecard(ind);
                }}
              ></span>
            ) : null;
          })}
        </div>
      </section>
    </>
  );
}
