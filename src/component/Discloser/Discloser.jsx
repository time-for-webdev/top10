import React from "react";
import styles from "./Discloser.module.css";
const Discloser = () => {
  return (
    <>
      <div className={styles.discloser_container}>
        <div className={styles.discloser_wrap}>
          <div className="disclosure__blocks main-disclosure">
            <span className="disclosure__label">Disclosure: </span>
            <details
              className={styles.disclosure_box}
              data-qa-id="disclosure__item_1"
            >
              <summary className="disclosure__btn">
                <span>Professional Reviews</span>
              </summary>
              <p>
                vpnMentor contains reviews that are written by our community
                reviewers, and are based on the reviewers' independent and
                professional examination of the products/services.{" "}
              </p>
            </details>
            <details
              className="disclosure__item"
              data-qa-id="disclosure__item_2"
            >
              <summary className="disclosure__btn">
                <span>Ownership</span>
              </summary>

              <p>
                vpnMentor is owned by Kape Technologies PLC, which owns the
                following products: ExpressVPN, CyberGhost, ZenMate, Private
                Internet Access, and Intego, which may be reviewed on this
                website.{" "}
              </p>
            </details>
            <details
              className="disclosure__item"
              data-qa-id="disclosure__item_3"
            >
              <summary className="disclosure__btn">
                <span className="original">Affiliate Commissions</span>
                <span className="us">Advertising</span>
              </summary>

              <p>
                vpnMentor contains reviews that were written by our experts and
                follow the strict reviewing standards, including ethical
                standards, that we have adopted. Such standards require that
                each review will be based on an independent, honest and
                professional examination of the reviewer. That being said, we
                may earn a commission when a user completes an action using our
                links, which will however not affect the review but might affect
                the rankings. The latter are determined on the basis of customer
                satisfaction of previous sales and compensation received.{" "}
              </p>
            </details>
            <details
              className="disclosure__item"
              data-qa-id="disclosure__item_4"
            >
              <summary className="disclosure__btn">
                <span>Reviews Guidelines</span>
              </summary>

              <p>
                The reviews published on vpnMentor are written by experts that
                examine the products according to our strict reviewing
                standards. Such standards ensure that each review is based on
                the independent, professional and honest examination of the
                reviewer, and takes into account the technical capabilities and
                qualities of the product together with its commercial value for
                users. The rankings we publish may take into consideration the
                affiliate commissions we earn for purchases through links on our
                website.{" "}
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discloser;
