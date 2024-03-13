import React from 'react'
import './HeroStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Hero(props,{images}) {
  useEffect(() => {
    AOS.init({duration : "700" ,  delay : "500"})
  },[])
  return (
    <div className={props.cName}>
        <div>
            <img src={props.heroImg} alt="Hero Image" /> 
        </div>

        <div className="hero-text" id= {props.Id}>
            <h1 data-aos="zoom-in-down">{props.title}</h1>
            <p  data-aos="fade-up">{props.text}</p>
            {/* <a href={props.url} className={props.btnClass} >{props.buttonText}</a> */}
        </div>     
    </div>
  )
}

export default Hero
