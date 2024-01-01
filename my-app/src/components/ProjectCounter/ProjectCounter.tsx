"use client"
import { useEffect } from "react";
import "./projectcounter.css";
import $ from 'jquery';

const ProjectCounter = () => {
    useEffect(() => {
        let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val") ?? "0", 10);

  let duration = Math.floor(interval / endValue);
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
                
            <div className="container">
            <img src="building (2).png"></img>
          <i className="fas fa-utensils"></i>
          <span className="num" data-val="400">000</span>
          <span className="text">Meals Delivered</span>
        </div>
        <div className="container">
        <img src="excavator.png"></img>
          <span className="num" data-val="340">000</span>
          <span className="text">Happy Customers</span>
        </div>
        <div className="container">
        <img src="sketch (1).png"></img>
          <span className="num" data-val="225">000</span>
          <span className="text">Menu Items</span>
        </div>
        <div className="container">
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