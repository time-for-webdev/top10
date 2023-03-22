import React from "react";
import styles from './Compare.module.css';
import { useState } from "react";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import star from '../../assects/Category/star.png'

function Compare(){
    const [linkclass,setClass]=useState(1);
    return <>
        <div id={styles.top_three} className={styles.top_three}>
          <div className={styles.container}>
            <div class="top-three__content-wrapper">
                <h3 className={styles.section_title }>
                    Compare Our Top 3 VPNs            </h3>
                <div className={styles.top_three__tabs}>
                        <div className={styles.top_three__tab} onClick={()=>{setClass(1)}}>
                            <a className={styles.top_three__tab_a} href="#tab_expressvpn">
                                <img loading="lazy" src={expresslogo} alt="ExpressVPN" class="img-responsive center-block" width="40" height="40"></img>
                            </a>
                        </div>
                        <div className={styles.top_three__tab} onClick={()=>{setClass(2)}}>
                            <a className={styles.top_three__tab_a} href="#tab_privateinternetaccess">
                                <img loading="lazy" src={expresslogo} alt="Private Internet Access" class="img-responsive center-block" width="40" height="40"></img>                      
                            </a>
                        </div>
                        <div className={styles.top_three__tab} onClick={()=>{setClass(3)}}>
                        <a className={styles.top_three__tab_a} href="#tab_cyberghostvpn">
                            <img loading="lazy" src={expresslogo} alt="CyberGhost VPN" class="img-responsive center-block" width="40" height="40"></img>
                        </a>
                        </div>
                </div>
                <div className={styles.top_three__list}>
                    <div className={linkclass===1?`${styles.top_three__item_js_active}`:`${styles.top_three__item}`} id="tab_expressvpn">
                        <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareTopThree_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_top_three', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                        <div className={styles.category__item_top_badge}>
                           <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div>
                        
                        <div className={styles.top_three__item_desc_wrap}>
                            <div className={styles.top_three__item_logo}>
                                <img class="img-responsive" width="180" height="52" loading="lazy" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                <noscript>
                                    <img class="img-responsive" width="180" height="52" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                </noscript>
                            </div>

                            <p>ExpressVPN, which is currently offering a <b>30-day free trial</b>, is the ultimate choice for high-speed browsing. With its military-grade encryption, you can rest assured that your internet activity will always remain private.</p>
                            <div className={styles.top_three__item_desc_notice}>
                                    70% of our users choose ExpressVPN                                
                            </div>
                        </div>

                        <h3 className={styles.top_three__item_subtitle}>ExpressVPN</h3>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Privacy
                                        </div>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-speed"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Speed
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.top_three__item_price_wrap}>
                            <h3 className={styles.top_three__item_subtitle}>Starting Price</h3>

                            <p className={styles.top_three__item_price}>
                                $6.67                            </p>
                            <small className={styles.top_three__item_price_range}>per month</small>
                        </div>

                        <div className={styles.top_three__item_cta_wrap}>
                            <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            <a className={styles.top_three__item_cta_site_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcVendorURL_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - Vendor URL', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                expressvpn.com
                            </a>

                        </div>
                    </div>
                    <div className={linkclass===2?`${styles.top_three__item_js_active}`:`${styles.top_three__item}`} id="tab_expressvpn">
                        <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareTopThree_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_top_three', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                        <div className={styles.category__item_top_badge}>
                           <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div>
                        
                        <div className={styles.top_three__item_desc_wrap}>
                            <div className={styles.top_three__item_logo}>
                                <img class="img-responsive" width="180" height="52" loading="lazy" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                <noscript>
                                    <img class="img-responsive" width="180" height="52" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                </noscript>
                            </div>

                            <p>ExpressVPN, which is currently offering a <b>30-day free trial</b>, is the ultimate choice for high-speed browsing. With its military-grade encryption, you can rest assured that your internet activity will always remain private.</p>
                            <div className={styles.top_three__item_desc_notice}>
                                    70% of our users choose ExpressVPN                                
                            </div>
                        </div>

                        <h3 className={styles.top_three__item_subtitle}>ExpressVPN</h3>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Privacy
                                        </div>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-speed"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Speed
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.top_three__item_price_wrap}>
                            <h3 className={styles.top_three__item_subtitle}>Starting Price</h3>

                            <p className={styles.top_three__item_price}>
                                $6.67                            </p>
                            <small className={styles.top_three__item_price_range}>per month</small>
                        </div>

                        <div className={styles.top_three__item_cta_wrap}>
                            <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            <a className={styles.top_three__item_cta_site_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcVendorURL_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - Vendor URL', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                expressvpn.com
                            </a>

                        </div>
                    </div>
                    <div className={linkclass===3?`${styles.top_three__item_js_active}`:`${styles.top_three__item}`} id="tab_expressvpn">
                        <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareTopThree_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_top_three', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                        <div className={styles.category__item_top_badge}>
                           <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div>
                        
                        <div className={styles.top_three__item_desc_wrap}>
                            <div className={styles.top_three__item_logo}>
                                <img class="img-responsive" width="180" height="52" loading="lazy" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                <noscript>
                                    <img class="img-responsive" width="180" height="52" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                </noscript>
                            </div>

                            <p>ExpressVPN, which is currently offering a <b>30-day free trial</b>, is the ultimate choice for high-speed browsing. With its military-grade encryption, you can rest assured that your internet activity will always remain private.</p>
                            <div className={styles.top_three__item_desc_notice}>
                                    70% of our users choose ExpressVPN                                
                            </div>
                        </div>

                        <h3 className={styles.top_three__item_subtitle}>ExpressVPN</h3>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Privacy
                                        </div>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <i class="fa fa-speed"></i>
                                            </span>
                                            <i className={styles.category__item_feature_check}></i>
                                            Speed
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.top_three__item_price_wrap}>
                            <h3 className={styles.top_three__item_subtitle}>Starting Price</h3>

                            <p className={styles.top_three__item_price}>
                                $6.67                            </p>
                            <small className={styles.top_three__item_price_range}>per month</small>
                        </div>

                        <div className={styles.top_three__item_cta_wrap}>
                            <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            <a className={styles.top_three__item_cta_site_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcVendorURL_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - Vendor URL', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                expressvpn.com
                            </a>

                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    </>
}

export default Compare;