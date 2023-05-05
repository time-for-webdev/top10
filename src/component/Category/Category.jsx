import React from "react";
import styles from "./Category.module.css";
import expresslogo from "../../assects/Home/ExpressVPN_Horizontal_Logo_Red-svg.svg";
import privateAccessVPN from "../../assects/Home/pia_logo_hor.svg";
import cyberghost from "../../assects/Home/CyberGhost-VPN-Hor.svg";
import Speed from '../../assects/Category/final.png';
import Privacy from '../../assects/Category/lock.png';
import Security from '../../assects/Category/9321857.png'
import checkMark from '../../assects/Category/checkMark.png'
import Newbies from '../../assects/Category/thumbUp.png'
import star from '../../assects/Category/star.png'
import useStartupCtx from "../Hooks/useContext";
import { useState,useEffect } from "react";
function Category(){
    const [indcnt, setindcnt] = useState(0);
    const { data_list } = useStartupCtx();
    useEffect(()=>{
        let size=data_list.length;
        let j=0;
        for(let i=0;i<size;i++){
            if(data_list[i]?.val?.feature?.length && j<3){
                setindcnt(i);j++;
            }
        }
    },[data_list]);
    return <>
      <div id="vpn-category" className={styles.hidden_xs}>
        <div className={styles.container}>
            <div class="category__content-wrapper">
                <h3 className={styles.section_title} data-qa-id="category_title">
                    The Best VPNs Per Category            </h3>
                <div className={styles.category__list} data-qa-id="vendor_category_list">

                    {data_list?.map((el,ind)=>{
                             
                        return indcnt>=ind &&(
                        <div className={styles.category__item} data-qa-id="category_item_1">
                        <div className={styles.category__item_top_badge}>
                            <img src={star} alt="star" style={{height:'20px',width:'20px',marginTop:'4px'}}></img>
                        </div>
                        <div className={styles.category__item_logo_wrapper}>
                            <a aria-label="overlay-link" className={styles.overlay_link} href={el?.val?.website_url} onclick="clickedLinkExternal('Windows - best_vpns_by_category', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes"></a>
                                <img   data-qa-id="category_item_logo_1" class="img-responsive center-block" src={el?.val?.icon} alt="Vendor Logo of ExpressVPN">
                                </img>
                           
                        </div>
                        <div className={styles.category__item_features}>
                            <a aria-label="overlay-link" className={styles.overlay_link} href={el?.val?.website_url} onclick="clickedLinkExternal('Windows - best_vpns_by_category_badges', 'ExpressVPN')" rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                            </a>
                            <div className={styles.category__item_features} data-qa-id="category_item_features_1">

                           { el?.val?.feature.map((ob,index)=>
                           {return(
                             <div className={styles.category__item_feature}>
                             <span className={styles.category__item_feature_label}>
                             
                             <img style={{height:'25px',widht:'25px',marginTop:'12px'}} src={ob?.category.toLowerCase() =='privacy' ? Privacy:ob?.category.toLowerCase() =='newbies' ? Newbies:ob?.category.toLowerCase() =='speed' ? Speed :ob?.category.toLowerCase() =='security' ? Security:null} alt="speed_logo"></img>
                             </span>
                             <i className={styles.category__item_feature_check}><img src={checkMark} alt="checkMark" style={{height:'10px',width:'10px',marginTop:'2px'}}></img></i>
                             {ob?.category}
                     </div>
                               
                           )})}
                           
                    

                            </div>
                        </div>
                        <div className={styles.category__item_cta_wrapper}>
                            <a data-qa-id="category_button_1" className={styles.button} href={el?.val?.website_url} rel="nofollow noopener noreferrer" target="_blank" data-tracked="yes">
                            Visit website
                            
                            </a>

                        </div>

                    </div>
                    )})}
                        
                </div>
            </div>
        </div>
      </div>
    </>
}

export default Category;