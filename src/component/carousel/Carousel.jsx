import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import fivestar from "../../assects/Home/fivestar.png";
import fourhalfstar from "../../assects/Home/fourhalfstar.png";
import useStartupCtx from "../Hooks/useContext";

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
  console.log(data_list);
  useEffect(() => {
    data_list.map((el, ind) => {
      if (el.val) {
        setcardcnt(ind);
      }
    });
    console.log(cardcnt);
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
              <img
                src="data:image/jpeg;base64,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"
                alt="brandlogo"
              />
            </div>
            <div className={styles.brand_review}>
              <h3>{data_list[cardcnt]?.val?.title}</h3>
              <img
                src={
                  parseFloat(data_list[cardcnt]?.val?.user_rating) > 4.5
                    ? fivestar
                    : fourhalfstar
                }
                alt="5 star review"
              />
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
                  <img
                    draggable="false"
                    src="data:image/jpeg;base64,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"
                    alt="brandlogo"
                  />
                </div>
                <div className={styles.brand_review}>
                  <h3>{el.val?.title}</h3>
                  <img
                    src={
                      parseFloat(el.val?.user_rating) > 4.5
                        ? fivestar
                        : fourhalfstar
                    }
                    alt="5 star review"
                  />
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
              <img
                src="data:image/jpeg;base64,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"
                alt="brandlogo"
              />
            </div>
            <div className={styles.brand_review}>
              <h3>{data_list[0]?.val.title}</h3>
              <img
                src={
                  parseFloat(data_list[0]?.val.user_rating) > 4.5
                    ? fivestar
                    : fourhalfstar
                }
                alt="5 star review"
              />
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
