import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import { EventContainer } from './EventContainer'
import './Event.css'
function Event() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "500"})
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <div className="eventcontainer">
        <div className="heading">
          <h1 data-aos="zoom-in">Events</h1>
        </div>
        <div className="mainevent">
          
          {EventContainer.map((item,index) => {
            return (
              <div className="particularevent">
              <div className="eventimage" data-aos="flip-up">
               <img src={item.image} alt="" />
              </div>
              <div className="details">
               <h1 data-aos="zoom-in">{item.title}</h1>
               <p data-aos="zoom-in-up">{item.descrption}</p>
              </div>
           </div>
            )
          })}
          </div>
        </div>
        <Footer></Footer>
      </div>
  )
}

export default Event;
