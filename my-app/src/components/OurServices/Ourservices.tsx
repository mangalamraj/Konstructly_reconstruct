"use client"
import style from "./services.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Services = () =>{
    useEffect(()=>{
        AOS.init();
    },[])
    
    return(
        <div className={style.Services_Grand}>
            <div className={style.Services_parent}>
                <div className={style.Head}>Our Services</div>
                <div className={style.SubHead}>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</div>
                <div className={style.Services_set}>
                    <div className={style.service_childset} data-aos="fade-up">
                        <img src="building (2).png"></img>
                        <div className={style.child_head}>Fast Operation</div>
                        <div className={style.child_subHead}>Konstructly impresses you with fully responsiveness and highly customization.</div>
                    </div>
                    <div className={style.service_childset} data-aos="fade-up" data-aos-delay="100">
                        <img src="excavator.png"></img>
                        <div className={style.child_head}>Renovation</div>
                        <div className={style.child_subHead}>Konstructly impresses you with fully responsiveness and highly customization.</div>
                    </div>
                    <div className={style.service_childset} data-aos="fade-up" data-aos-delay="200">
                        <img src="sketch (1).png"></img>
                        <div className={style.child_head}>Consultation</div>
                        <div className={style.child_subHead}>Konstructly impresses you with fully responsiveness and highly customization.</div>
                    </div>
                    <div className={style.service_childset} data-aos="fade-up" data-aos-delay="300">
                        <img src="construction (1).png"></img>
                        <div className={style.child_head}>Architecture</div>
                        <div className={style.child_subHead}>Konstructly impresses you with fully responsiveness and highly customization.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;