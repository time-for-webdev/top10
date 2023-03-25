import React from "react";
import styles from "./Discloser.module.css";
const Discloser = () => {
  // var details = [...document.querySelectorAll("details")];
  // document.addEventListener("click", function (e) {
  //   if (!details.some((f) => f.contains(e.target))) {
  //     details.forEach((f) => f.removeAttribute("open"));
  //   } else {
  //     details.forEach((f) =>
  //       !f.contains(e.target) ? f.removeAttribute("open") : ""
  //     );
  //   }
  // });
  return (
    <>
      <div className={styles.discloser_container}>
        <div className={styles.discloser_wrap}>
          <span className={styles.disclosure__label}>Disclosure: </span>
          <details className={styles.disclosure__item}>
            <summary className={styles.Discloser_group}>
              <span>Professional Reviews</span>
            </summary>
            <p>
              vpnMentor contains reviews that are written by our community
              reviewers, and are based on the reviewers' independent and
              professional examination of the products/services.{" "}
            </p>
          </details>
          <details className={styles.disclosure__item}>
            <summary className={styles.Discloser_group}>
              <span>Ownership</span>
            </summary>

            <p>
              vpnMentor is owned by Kape Technologies PLC, which owns the
              following products: ExpressVPN, CyberGhost, ZenMate, Private
              Internet Access, and Intego, which may be reviewed on this
              website.{" "}
            </p>
          </details>
          <details className={styles.disclosure__item}>
            <summary className={styles.Discloser_group}>
              <span className="original">Affiliate Commissions</span>
              {/* <span className="us">Advertising</span> */}
            </summary>

            <p>
              vpnMentor contains reviews that were written by our experts and
              follow the strict reviewing standards, including ethical
              standards, that we have adopted. Such standards require that each
              review will be based on an independent, honest and professional
              examination of the reviewer. That being said, we may earn a
              commission when a user completes an action using our links, which
              will however not affect the review but might affect the rankings.
              The latter are determined on the basis of customer satisfaction of
              previous sales and compensation received.{" "}
            </p>
          </details>
          <details className={styles.disclosure__item}>
            <summary className={styles.Discloser_group}>
              <span>Reviews Guidelines</span>
            </summary>

            <p>
              The reviews published on vpnMentor are written by experts that
              examine the products according to our strict reviewing standards.
              Such standards ensure that each review is based on the
              independent, professional and honest examination of the reviewer,
              and takes into account the technical capabilities and qualities of
              the product together with its commercial value for users. The
              rankings we publish may take into consideration the affiliate
              commissions we earn for purchases through links on our website.{" "}
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default Discloser;
