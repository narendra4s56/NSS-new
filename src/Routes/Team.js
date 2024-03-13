import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Domain from '../Components/Domain';
import './Team.css';
import { TEamImageContainer } from './TeamImageContainer';
function Contact() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "50"})
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <div className="teamContent" id='teamContentId'>
        <h1 data-aos="zoom-in">Our Team</h1>
        <div className="teamMember">
          {TEamImageContainer.map((item, index) =>{
            return (
              <>
              <div className="particularContainer" data-aos="flip-left">
              <img src={item.img} alt=" Team Image" className='memberImage'/>
               <h1 >{item.name}</h1>
               <h1 >{item.position}</h1>
              </div>
               </>
            );
          })}
        </div>
      </div>
      <Domain></Domain>
      <Footer></Footer>
    </div>
  )
}

export default Contact
