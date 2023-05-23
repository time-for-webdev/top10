import React from "react";
import styles from "./Dmca.module.css";

const Dmca = () => {
  return (
    <div>
      <main className={styles.app}>
        <div className={styles.legal}>
          <div>
            <div className={styles.header}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <h1 className={styles.heading}>WEBSELENESE DMCA POLICY</h1>
                </div>
              </div>
            </div>
            <div className={styles.container} id={styles.content}>
              <div className={styles.row}>
                <article className={styles.main_article}>
                  <section
                    className={styles.legal_content}
                    id={styles.block_text}
                  >
                    <div>
                      <p>
                        DiscountVpn.com, respects the intellectual property
                        rights of creators and WS requires that our users also
                        respect these same intellectual property rights. The
                        Digital Millennium Copyright Act (“DMCA”) establishes a
                        formal process for addressing and actioning copyright
                        infringement claims integrated into content hosted at
                        DiscountVpn.com pursuant to 17 U.S.C. 512(c). WS will
                        respond expeditiously to claims for copyright
                        infringement regarding content hosted on DiscountVpn.com
                        or its family of websites. If you are a copyright owner
                        or if you have authority to act on behalf of a copyright
                        owner and want to report a claim that a third party is
                        infringing your copyright on or through DiscountVpn.com
                        or its partners, please send a notice to our copyright
                        agent that includes all of the elements below and we
                        will expeditiously take appropriate action on your
                        behalf. Upon receipt of a valid and complete notice as
                        described herein, DiscountVpn.com will take actions it
                        in its sole discretion deems appropriate, including
                        removal of the reported content from the website.
                        <br></br>
                        For us to take action against infringing content, we
                        require from the copyright owner or a party authorized
                        to act on behalf of the copyright owner:
                      </p>
                      <ol>
                        <li>
                          A description of the copyrighted work that you claim
                          is being infringed;
                        </li>
                        <li>
                          {" "}
                          A description of the material you claim is infringing
                          and that you want removed or access to which you want
                          disabled and the URL or other location of that
                          material;
                        </li>
                        <li>
                          {" "}
                          Your address, telephone number, and email address;
                        </li>
                        <li>
                          The following statement: “I have a good faith belief
                          that the use of the copyrighted material I am
                          complaining of is not authorized by the copyright
                          owner, its agent, or the law (e.g., as a fair use)”;
                        </li>
                        <li>
                          {" "}
                          The following statement: “The information in this
                          notice is accurate and, under penalty of perjury, I am
                          the owner, or authorized to act on behalf of the
                          owner, of the copyright or of an exclusive right that
                          is allegedly infringed”; and
                        </li>
                        <li>
                          {" "}
                          An electronic or physical signature of the owner of
                          the copyright or a person authorized to act on the
                          owner's behalf.
                        </li>
                      </ol>
                      <p>
                        The designated copyright agent we have to receive
                        infringement claims can be contacted:
                      </p>
                    </div>
                  </section>
                  <section
                    className={styles.legal_content}
                    id={styles.block_text}
                  >
                    <h4 className={styles.topic}>
                      <u>By email: discountvpncom@gmail.com</u>
                    </h4>
                    <div>
                      <p>
                        If you are of the belief that content posted by You to
                        the Site or Services was removed or access to the
                        content was disabled by mistake or misidentification,
                        You may file a DMCA counter-notification with WS by
                        submitting a follow-up written notification to the WS
                        copyright agent.
                        <br></br>Pursuant to the DMCA, the Counter-Notification
                        must include substantially the following:
                      </p>
                      <ol>
                        <li>Your physical or electronic signature.</li>
                        <li>
                          {" "}
                          An identification of the material that has been
                          removed or to which access has been disabled and the
                          location at which the material appeared before it was
                          removed or access disabled.
                        </li>
                        <li>
                          {" "}
                          Adequate information by which we can contact you
                          (including your name, postal address, telephone
                          number, and, if available, email address).
                        </li>
                        <li>
                          A statement under penalty of perjury by you that you
                          have a good faith belief that the material identified
                          above was removed or disabled as a result of a mistake
                          or misidentification of the material to be removed or
                          disabled.
                        </li>
                        <li>
                          {" "}
                          A statement that you will consent to the jurisdiction
                          of the Federal District Court for the judicial
                          district in which your address is located (or if you
                          reside outside the United States for any judicial
                          district in which the Website may be found) and that
                          you will accept service from the person (or an agent
                          of that person) who provided the Website with the
                          complaint at issue.
                        </li>
                      </ol>
                      <p>
                        A counter-notification will allow WS to restore the
                        content that was taken down if the party filing the
                        original DMCA Notice does not file a lawsuit or other
                        legal action against You within ten (10) business days
                        of receiving the Counter-Notification.<br></br>Please be
                        aware that if You knowingly materially misrepresent that
                        material or activity on the Website was removed or
                        disabled by mistake or misidentification, you may be
                        held liable for damages (including costs and attorney
                        fees) under the DMCA (including Section 512(f) of the
                        DMCA.
                      </p>
                    </div>
                  </section>
                  <section
                    className={styles.legal_content}
                    id={styles.block_text}
                  >
                    <h4 className={styles.topic}>
                      <u>REPEAT INFRINGER POLICY</u>
                    </h4>
                    <div>
                      <p>
                        Pursuant to the repeat infringer policy requirements of
                        the Digital Millennium Copyright Act, DiscountVPN makes
                        a good faith effort to identify and terminate ANY and
                        ALL repeat infringers that abuse the Site and/or the
                        Services pursuant to the safe harbor requirements of the
                        DMCA.
                      </p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dmca;
