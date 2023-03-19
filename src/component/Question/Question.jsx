
import { useState } from "react";
import styles from './Question.module.css';

function Question(){
     const [drop1,setDrop1]=useState(true);
     const [drop2,setDrop2]=useState(true);
     const [drop3,setDrop3]=useState(true);
     const [drop4,setDrop4]=useState(true);
  
    return <>
             <div className={styles.faqs} id="faqs">
               <div className={styles.container}>
                 <h3 className={styles.faqs__title}>
                    Frequently Asked Questions            
                 </h3>
                <div className={styles.faqs__list}>
                    <details className={styles.faq} onClick={()=>{
                          setDrop1(!drop1);
                    }}>
                        <summary  className={drop1 ? `${styles.faq__title}` : `${styles.faq__title1}` }>
                                Why do I need a VPN?                        
                        </summary>

                        <div className={styles.faq__text}>
                            "The most important reasons to use a VPN are to secure your online activity."
                            <br></br>
                            <br></br>
                            "When left unprotected, your private data, such as bank account information and credit card numbers, can fall into the wrong hands. A good VPN encrypts your data, so even if you connect to a public wi-fi network, your private data is guaranteed to be protected."
                        </div>
                    </details>
                    <details className={styles.faq} onClick={()=>{
                        setDrop2(!drop2);
                    }}>
                        
                        <summary className={drop2 ? `${styles.faq__title}` : `${styles.faq__title1}`}>
                                
                            How can I get the best price for a VPN?                                                
                        </summary>

                        <div className={styles.faq__text}>
                            <p>The monthly price will usually vary based on the length of your subscription. If you purchase a 2-year plan, you will pay less per month than what you'd pay for a monthly plan.</p>
                            <p>Surprisingly, VPN companies sometimes hide their best deals deep in their website. Lucky for you, we’ve gone to the trouble to find these deals.</p>
                            <p>For example, here you can save up to <a style={{}} aria-label="ExpressVPN" onclick="event.stopPropagation(); clickedLinkExternal('Great VPNS FAQ - Content Link','ExpressVPN');" class="" target="_blank" href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=GreatvpnsFaqContentLink_1460_Windows&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pageview_id=1|LFF0W31BAK3A4&amp;clickout_id=1|LFF0W31BAK3A4|1|1460" rel="nofollow noopener noreferrer" data-tracked="yes">49% on ExpressVPN and get 3 months free</a>, or save as much as <a style={{}} aria-label="CyberGhost VPN" onclick="event.stopPropagation(); clickedLinkExternal('Great VPNS FAQ - Content Link','CyberGhost VPN');" class="" target="_blank" href="https://www.vpn-mentors.com/?Track_link=MTYxNXw=&amp;dl=windows&amp;vid=1615&amp;target=GreatvpnsFaqContentLink_1615_Windows&amp;pageid=111_en_ppc&amp;type=ppc&amp;pageview_id=1|LFF0W31BAK3A4&amp;clickout_id=1|LFF0W31BAK3A4|1|1615" rel="nofollow noopener noreferrer" data-tracked="yes">85% when you buy CyberGhost</a>.</p>
                        </div>
                    </details>
                    <details className={styles.faq} onClick={()=>{
                          setDrop3(!drop3);
                        }} >
                        <summary className={drop3 ? `${styles.faq__title}` : `${styles.faq__title1}`}>
                                How do I connect a VPN?                       
                        </summary>

                        <div className={styles.faq__text}>
                            
                           <p>You can connect to most VPNs with just a few clicks of a mouse - it really is that simple. You’ll need to download and install the software, log in, choose a country to connect to, and you’re all set.</p>
                           <p><a href="https://www.vpn-mentors.com/best-free-vpn-trials/" onmousedown="clickedLinkInternal('Great VPNS FAQ - Content Link','GreatVPNS', event);" target="_blank">Try it today</a> and take advantage of the <strong>HOT DEALS</strong> we have today!</p>
                        </div>
                    </details>
                    <details className={styles.faq} onClick={()=>{
                        setDrop4(!drop4);
                    }}>
                        <summary className={drop4 ? `${styles.faq__title}` : `${styles.faq__title1}`}>
                            Can I set up a VPN on my smartphone?                        
                        </summary>

                        <div className={styles.faq__text}>
                            <p>Of Course!</p>

                            <p>Most VPNs offer mobile apps for Android and iPhone. Install the app and safely browse from your phone or tablet on any Wi-Fi without worry. Some VPNs will let you connect multiple devices simultaneously, so you can connect your PC, laptop, phone, router, and other devices in your household, all for the price of a single account.
                            </p>
                            <p>Check out vpnMentor's <strong>top rated</strong> <a href="https://www.vpn-mentors.com/best-vpn-for-android/" onmousedown="clickedLinkInternal('Great VPNS FAQ - Content Link','GreatVPNS', event);" target="_blank">VPNs for Android</a> or <a href="https://www.vpn-mentors.com/best-vpn-for-iphone-ipad/" onmousedown="clickedLinkInternal('Great VPNS FAQ - Content Link','GreatVPNS', event);" target="_blank">for iPhone</a>.</p>
                        </div>
                    </details>
                    


                </div>
               </div>
             </div>
    </>
            
}
export default Question;