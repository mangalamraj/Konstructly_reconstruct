"use client"
import { useEffect } from "react";
import "./projectcounter.css";
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCounter = () => {
  useEffect(()=>{
    AOS.init();
},[])
    useEffect(() => {
        let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val") ?? "0", 10);

  let duration = Math.floor(interval / endValue+10);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue.toString(); // Convert to string
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
    },[]);
    return (
        <div className="Project_Counter_grand">
        <div className="Counter_parent">
            <div className="Counter_Head">
                Konstructly Group
            </div>
            <div className="Counter_Subhead">
                Setting new benchmark standard of quality standard.
            </div>
            <div className="wrapper">
                
            <div className="container" data-aos="fade-up">
            <img src="building (2).png"></img>
          <i className="fas fa-utensils"></i>
          <span className="num" data-val="400">000</span>
          <span className="text">Areas Developed</span>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
        <img src="excavator.png"></img>
          <span className="num" data-val="40">000</span>
          <span className="text">OnGoing Projects</span>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
        <img src="sketch (1).png"></img>
          <span className="num" data-val="85">000</span>
          <span className="text">Completed Projects</span>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="300">
        <img src="construction (1).png"></img>
          <span className="num" data-val="280">000</span>
          <span className="text">Five Stars</span>
        </div>
            </div>
       
        </div>
        
      </div>
    );
};

export default ProjectCounter;