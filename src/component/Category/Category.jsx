import React from "react";
import styles from "./Category.module.css";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import privateAccessVPN from "../../assects/Home/pia_logo_hor.svg";
import cyberghost from "../../assects/Home/CyberGhost-VPN-Hor.svg";
import speed from '../../assects/Category/final.png';
import lock from '../../assects/Category/lock.png';
import privacy from '../../assects/Category/9321857.png'
import checkMark from '../../assects/Category/checkMark.png'
import thumbUp from '../../assects/Category/thumbUp.png'
import star from '../../assects/Category/star.png'
function Category(){
    return <>
      <div id="vpn-category" className={styles.hidden_xs}>
        <div className={styles.container}>
            <div class="category__content-wrapper">
                <h3 className={styles.section_title} data-qa-id="category_title">
                    The Best VPNs Per Category            </h3>
                <div className={styles.category__list} data-qa-id="vendor_category_list">
                        <div className={styles.category__item} data-qa-id="category_item_1">
                            <div className={styles.category__item_top_badge}>
                                <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                            </div>
                            <div className={styles.category__item_logo_wrapper}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategory_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                                    <img width="150" height="42" data-qa-id="category_item_logo_1" class="img-responsive center-block" loading="lazy" src={expresslogo} alt="Vendor Logo of ExpressVPN">
                                    </img>
                                <noscript>
                                    <img width="150" height="42" class="img-responsive center-block" src="/wp-content/uploads/2019/06/ExpressVPN_Horizontal_Logo_Red-svg.svg" alt="Vendor Logo of ExpressVPN"/>
                                </noscript>
                            </div>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features} data-qa-id="category_item_features_1">

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
                            <div className={styles.category__item_cta_wrapper}>
                                <a data-qa-id="category_button_1" className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                Visit website
                                
                                </a>

                            </div>

                        </div>

                        <div className={styles.category__item} data-qa-id="category_item_1">
                            {/* <div className={styles.category__item_top_badge}>
                                <i class="fa fa-star"></i>
                            </div> */}
                            <div className={styles.category__item_logo_wrapper}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategory_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                                    <img width="150" height="42" data-qa-id="category_item_logo_1" class="img-responsive center-block" loading="lazy" src={privateAccessVPN} alt="Vendor Logo of ExpressVPN">
                                    </img>
                                <noscript>
                                    <img width="150" height="42" class="img-responsive center-block" src="/wp-content/uploads/2019/06/ExpressVPN_Horizontal_Logo_Red-svg.svg" alt="Vendor Logo of ExpressVPN"/>
                                </noscript>
                            </div>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features} data-qa-id="category_item_features_1">

                                    <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                            <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={privacy} alt="speed_logo"></img>
                                            </span>
                                            <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                                            Security
                                    </div>

                                </div>
                            </div>
                            <div className={styles.category__item_cta_wrapper}>
                                <a data-qa-id="category_button_1" className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            </div>

                        </div>


                        <div className={styles.category__item} data-qa-id="category_item_1">
                            {/* <div className={styles.category__item_top_badge}>
                                <i class="fa fa-star"></i>
                            </div> */}
                            <div className={styles.category__item_logo_wrapper}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategory_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                                    <img width="150" height="42" data-qa-id="category_item_logo_1" class="img-responsive center-block" loading="lazy" src={cyberghost} alt="Vendor Logo of ExpressVPN">
                                    </img>
                                <noscript>
                                    <img width="150" height="42" class="img-responsive center-block" src="/wp-content/uploads/2019/06/ExpressVPN_Horizontal_Logo_Red-svg.svg" alt="Vendor Logo of ExpressVPN"/>
                                </noscript>
                            </div>
                            <div className={styles.category__item_features}>
                                <a aria-label="overlay-link" className={styles.overlay_link} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryBadges_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                                </a>
                                <div className={styles.category__item_features} data-qa-id="category_item_features_1">

                                    <div className={styles.category__item_feature}>
                                            <span className={styles.category__item_feature_label}>
                                            <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={thumbUp} alt="speed_logo"></img>
                                            </span>
                                            <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                                            Newbies
                                    </div>

                                    
                                </div>
                            </div>
                            <div className={styles.category__item_cta_wrapper}>
                                <a data-qa-id="category_button_1" className={styles.button} href="https://www.vpn-mentors.com/?Track_link=MTQ2MHw=&amp;dl=windows&amp;vid=1460&amp;target=ppcBestVpnsbyCategoryVisitWebsite_1460_Windows_0&amp;pageid=111_en_ppc&amp;type=ppc&amp;org_referer=https://www.vpn-mentors.com/best-windows-vpn/&amp;ve=1&amp;pos=0&amp;pageview_id=1|LFDJFLCJB1BUK&amp;clickout_id=1|LFDJFLCJB1BUK|1|1460" onclick="clickedLinkExternal('Windows - best_vpns_by_category_visit_website', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">Visit website</a>

                            </div>

                        </div>



                </div>
            </div>
        </div>
      </div>
    </>
}

export default Category;