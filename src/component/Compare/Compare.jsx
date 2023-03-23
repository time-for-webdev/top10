import React from "react";
import styles from './Compare.module.css';
import { useState } from "react";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import privateAccessVPN from "../../assects/Home/pia_logo_hor.svg";
import cyberghost from "../../assects/Home/CyberGhost-VPN-Hor.svg";
import expressSmall from "../../assects/Home/ExpressVPN_Monogram_Logo_Red-1.svg";
import piaLogo from "../../assects/Home/logo-pia.png"
import cyberghostLogo from "../../assects/Home/logo-cyberghost.png"
import star from '../../assects/Category/star.png'
import { AiFillDollarCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { AiFillSwitcher } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";
import { BiDevices } from "react-icons/bi";
import privacy from '../../assects/Category/9321857.png'
import checkMark from '../../assects/Category/checkMark.png'
import thumbUp from '../../assects/Category/thumbUp.png'
import speed from '../../assects/Category/final.png';
import lock from '../../assects/Category/lock.png';
function Compare(){
    const [linkclass,setClass]=useState(1);
    return <>
        <div id={styles.top_three} className={styles.top_three}>
          <div className={styles.container}>
            <div class="top-three__content-wrapper">
                <h3 className={styles.section_title }>
                    Compare Our Top 3 VPNs            </h3>
                <div className={styles.top_three__tabs}>
                        <div className={linkclass===1?`${styles.top_three__tab_js_active}`:`${styles.top_three__tab}`} onClick={()=>{ setClass(1)}}>
                            <a className={styles.top_three__tab_a} href="#tab_expressvpn">
                                <img loading="lazy" src={expressSmall} alt="ExpressVPN" class="img-responsive center-block" width="40" height="40"></img>
                            </a>
                        </div>
                        <div className={linkclass===2?`${styles.top_three__tab_js_active}`:`${styles.top_three__tab}`} onClick={()=>{setClass(2)}}>
                            <a className={styles.top_three__tab_a} href="#tab_privateinternetaccess">
                                <img loading="lazy" src={piaLogo} alt="Private Internet Access" class="img-responsive center-block" width="40" height="40"></img>                      
                            </a>
                        </div>
                        <div className={linkclass===3?`${styles.top_three__tab_js_active}`:`${styles.top_three__tab}`} onClick={()=>{setClass(3)}}>
                        <a className={styles.top_three__tab_a} href="#tab_cyberghostvpn">
                            <img loading="lazy" src={cyberghostLogo} alt="CyberGhost VPN" class="img-responsive center-block" width="40" height="40"></img>
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
                        <div className={styles.top_three__item_features}>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillDollarCircle className={styles.fa}></AiFillDollarCircle>
                                    <small>Money back Guarantee</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    30 days
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiWorld className={styles.fa}></BiWorld>
                                    <small>Server/<br/>countries</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    3000 servers in 94 countries
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                                    <small>Kill Switch</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Yes
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiMobile className={styles.fa}></BiMobile>
                                    <small>Mobile</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Ios,Android
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiDevices className={styles.fa}></BiDevices>
                                    <small>Devices/<br/>Licenses</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    7
                                </span>
                            </div>
                            <div className={styles.top_three__item_features_cta_wrap}>
                                <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20google&amp;geo=166&amp;device=&amp;utm_source=bing&amp;adid=82669894992549&amp;msclkid=6b72a1909fde1113f9acc58838b3d063&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFKAITYJBLB5L&amp;clickout_id=1|LFKAITYJBLB5L|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            </div>
                        </div>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                           <span className={styles.category__item_feature_label}>
                                            
                                            <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={lock} alt="speed_logo"></img>
                                            </span>
                                            <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                                            Privacy
                                        </div>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                    {/* <i class="fa fa-speed"></i> */}
                                                    <img style={{height:'30px',widht:'30px',marginTop:'10px'}} src={speed} alt="speed_logo"></img>
                                                </span>
                                                <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
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
                        {/* <div className={styles.category__item_top_badge}>
                           <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div> */}
                        
                        <div className={styles.top_three__item_desc_wrap}>
                            <div className={styles.top_three__item_logo}>
                                <img class="img-responsive" width="180" height="52" loading="lazy" src={privateAccessVPN} alt="Vendor Logo of ExpressVPN"></img>
                                <noscript>
                                    <img class="img-responsive" width="180" height="52" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                </noscript>
                            </div>

                           <p>Thanks to a brilliant interface and lots of handy features, this VPN will make even the pickiest users happy. For desktop or mobile, Windows, Mac, or Linux, if you want to securely enjoy private browsing, CyberGhost is consistently impressive.</p> 
                            {/* <div className={styles.top_three__item_desc_notice}>
                                    70% of our users choose ExpressVPN                                
                            </div> */}
                        </div>

                        <h3 className={styles.top_three__item_subtitle}>Private Internet Access</h3>
                        <div className={styles.top_three__item_features}>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillDollarCircle className={styles.fa}></AiFillDollarCircle>
                                    <small>Money back Guarantee</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    30 days
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiWorld className={styles.fa}></BiWorld>
                                    <small>Server/<br/>countries</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    3000 servers in 94 countries
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                                    <small>Kill Switch</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Yes
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiMobile className={styles.fa}></BiMobile>
                                    <small>Mobile</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Ios,Android
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiDevices className={styles.fa}></BiDevices>
                                    <small>Devices/<br/>Licenses</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    7
                                </span>
                            </div>
                            <div className={styles.top_three__item_features_cta_wrap}>
                                <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20google&amp;geo=166&amp;device=&amp;utm_source=bing&amp;adid=82669894992549&amp;msclkid=6b72a1909fde1113f9acc58838b3d063&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFKAITYJBLB5L&amp;clickout_id=1|LFKAITYJBLB5L|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            </div>
                        </div>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={privacy} alt="speed_logo"></img>
                                                </span>
                                                <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                                                Security
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
                        {/* <div className={styles.category__item_top_badge}>
                           <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div> */}
                        
                        <div className={styles.top_three__item_desc_wrap}>
                            <div className={styles.top_three__item_logo}>
                                <img class="img-responsive" width="180" height="52" loading="lazy" src={cyberghost} alt="Vendor Logo of ExpressVPN"></img>
                                <noscript>
                                    <img class="img-responsive" width="180" height="52" src={expresslogo} alt="Vendor Logo of ExpressVPN"></img>
                                </noscript>
                            </div>

                            <p>Instant setup, unlimited bandwidth, and an affordable price that's backed by a 30-day money-back guarantee. Includes Wi-Fi security and a built-in adblocker.
                            </p>
                            {/* <div className={styles.top_three__item_desc_notice}>
                                    70% of our users choose ExpressVPN                                
                            </div> */}
                        </div>

                        <h3 className={styles.top_three__item_subtitle}>Cyber Ghost</h3>
                        <div className={styles.top_three__item_features}>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillDollarCircle className={styles.fa}></AiFillDollarCircle>
                                    <small>Money back Guarantee</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    20 days
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiWorld className={styles.fa}></BiWorld>
                                    <small>Server/<br/>countries</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    3000 servers in 94 countries
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <AiFillSwitcher className={styles.fa}></AiFillSwitcher>
                                    <small>Kill Switch</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Yes
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiMobile className={styles.fa}></BiMobile>
                                    <small>Mobile</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    Ios,Android
                                </span>
                            </div>
                            <div className={styles.top_three__item_feature}>
                                <span className={styles.top_three__item_feature_label}>
                                    <BiDevices className={styles.fa}></BiDevices>
                                    <small>Devices/<br/>Licenses</small>
                                </span>
                                <span className={styles.top_three__item_feature_value}>
                                    7
                                </span>
                            </div>
                            <div className={styles.top_three__item_features_cta_wrap}>
                                <a className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcCompareVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20google&amp;geo=166&amp;device=&amp;utm_source=bing&amp;adid=82669894992549&amp;msclkid=6b72a1909fde1113f9acc58838b3d063&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFKAITYJBLB5L&amp;clickout_id=1|LFKAITYJBLB5L|1|1460" onclick="clickedLinkExternal('Windows - compare_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            </div>
                        </div>

                        <div className={styles.top_three__item_best_for}>
                            <h3 className={styles.top_three__item_subtitle}>Best VPN for</h3>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay_link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/?keyword=vpn%20for%20pc&amp;geo=1028878&amp;device=&amp;cq_src=google_ads&amp;cq_cmp=15405502730&amp;cq_term=vpn%20for%20pc&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=cj0kcqjwwtwgbhdharisaemcxebh75rohnkq4eo2aftkzovjg97qbrrfagfwer-tbqe0n1hxz_-tqaaaaicdealw_wcb&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFHH74Z398XBR&amp;clickout_id=1|LFHH74Z398XBR|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features}>
                                        <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                                <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={thumbUp} alt="speed_logo"></img>
                                                </span>
                                                <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                                                Newbies
                                        </div>
                                        
                                </div>
                            </div>
                        </div>

                        <div className={styles.top_three__item_price_wrap}>
                            <h3 className={styles.top_three__item_subtitle}>Starting Price</h3>

                            <p className={styles.top_three__item_price}>
                                $5.67                            </p>
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