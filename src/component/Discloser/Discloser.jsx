import React from "react";
import styles from "./Discloser.module.css";
import { useState, useRef } from "react";
const Discloser = () => {
  document.addEventListener("click", function (e) {
    if (myRef.current && !myRef.current.contains(e.target)) {
      setshow(0);
    }
  });

  const [show, setshow] = useState(0);
  const myRef = useRef();

  return (
    <>
      <div ref={myRef} className={styles.discloser_container}>
        <div className={styles.discloser_wrap}>
          <span className={styles.disclosure__label}>Disclosure: </span>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span
                onClick={(e) => {
                  setshow(1);
                }}
              >
                Professional Reviews
              </span>
            </div>
            {show === 1 ? (
              <p>
                Discount VPN features reviews authored by members of our
                community of reviewers. These reviews are derived from the
                reviewers' impartial and expert evaluation of the products and
                services
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span
                onClick={(e) => {
                  setshow(2);
                }}
              >
                Ownership
              </span>
            </div>
            {show === 2 ? (
              <p>
                DiscountVPN.com originated as a platform dedicated to evaluating
                VPN services. Presently, our team of researchers, writers, and
                editors remains committed to delivering reviews that reflect the
                evolving dynamics of the market
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span
                onClick={(e) => {
                  setshow(3);
                }}
                className="original"
              >
                Affiliate
              </span>
            </div>
            {show === 3 ? (
              <p>
                DiscountVPN.com features expert-written reviews based on
                independent evaluations following strict ethical standards.
                While we may earn commissions from user actions, our reviews
                remain unbiased, although rankings may be influenced by customer
                satisfaction and compensation
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discloser;
