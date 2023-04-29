import React from "react";
import styles from "./Discloser.module.css";
import { useState, useRef } from "react";
const Discloser = () => {
  document.addEventListener("click", function (e) {
    if (myRef.current && !myRef.current.contains(e.target)) {
      setshow(0);
    }
  })

  const [show, setshow] = useState(0);
  const myRef = useRef();

  return (
    <>
      <div ref={myRef} className={styles.discloser_container}>
        <div className={styles.discloser_wrap}>
          <span className={styles.disclosure__label}>Disclosure: </span>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group} >
              <span onClick={(e) => { setshow(1) }}>Professional Reviews</span>
            </div>
            {show === 1 ?
              <p>
                discountVpn contains reviews that are written by our community
                reviewers, and are based on the reviewers' independent and
                professional examination of the products/services.{" "}
              </p> : ""}
          </div>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span onClick={(e) => { setshow(2) }}>Ownership</span>
            </div>
            {show === 2 ?
              <p>
                discountVpn is owned by Kape Technologies PLC, which owns the
                following products: ExpressVPN, CyberGhost, ZenMate, Private
                Internet Access, and Intego, which may be reviewed on this
                website.{" "}
              </p> : ""}
          </div>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span onClick={(e) => { setshow(3) }} className="original">Affiliate Commissions</span>
              {/* <span onClick={(e)=>{setshow(3)}} className="us">Advertising</span> */}
            </div>
            {show === 3 ?
              <p>
                discountVpn contains reviews that were written by our experts and
                follow the strict reviewing standards, including ethical
                standards, that we have adopted. Such standards require that each
                review will be based on an independent, honest and professional
                examination of the reviewer. That being said, we may earn a
                commission when a user completes an action using our links, which
                will however not affect the review but might affect the rankings.
                The latter are determined on the basis of customer satisfaction of
                previous sales and compensation received.{" "}
              </p> : ""}
          </div>
          <div className={styles.disclosure__item}>
            <div className={styles.Discloser_group}>
              <span onClick={(e) => { setshow(4) }}>Reviews Guidelines</span>
            </div>
            {show === 4 ?
              <p>
                The reviews published on discountVpn are written by experts that
                examine the products according to our strict reviewing standards.
                Such standards ensure that each review is based on the
                independent, professional and honest examination of the reviewer,
                and takes into account the technical capabilities and qualities of
                the product together with its commercial value for users. The
                rankings we publish may take into consideration the affiliate
                commissions we earn for purchases through links on our website.{" "}
              </p> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discloser;
