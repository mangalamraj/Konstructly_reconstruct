"use client"
import AOS from 'aos';
import styles from "./review.module.css"
import { useEffect } from "react";
const Review= () =>{
    useEffect(()=>{
        AOS.init();
    },[])
    return(
        <div className={styles.Review_Grand}>
            <div className={styles.Review_Parent}>
                <div className={styles.Heading_part}>
                <div className={styles.Review_Head}>Our Client Say</div>
                <div className={styles.Review_Subhead}>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.</div>
                </div>
                <div className={styles.Review_set}>
                    <div className={styles.set1} data-aos="fade-up">
                    <div className={styles.Reviewer_dp}>
                        <img src="https://landing.zytheme.com/cobuild/assets/images/testimonials/1.jpg"></img>
                    </div>
                    <div className={styles.Review_area}>
                        <div className={styles.Review_data}>“It’s just brilliant. I will recommend Cobuild to everyone I know! I’m really glad to these guys got Konstructly out there.”</div>
                        <div className={styles.Reviewer_name}>Gene Stevens</div>
                    </div>
                    </div>

                    <div className={styles.set2} data-aos="fade-up" data-aos-delay="100">
                    <div className={styles.Reviewer_dp}>
                        <img src="https://landing.zytheme.com/cobuild/assets/images/testimonials/4.jpg"></img>
                    </div>
                    <div className={styles.Review_area}>
                        <div className={styles.Review_data}>“It’s just brilliant. I will recommend Cobuild to everyone I know! I’m really glad to these guys got Konstructly out there.”</div>
                        <div className={styles.Reviewer_name}>Gene Stevens</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review