import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from '../Components/Navbar'
import { NewsletterContainer } from './NewsletterContainer';
import Footer from '../Components/Footer'
import './newsletter.css'
function Newsletter() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "50"})
  },[])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="newscontent">
        <h1>Newsletter</h1>
      <Carousel responsive={responsive} className='content' axis='vertical'>
        {NewsletterContainer.map((item,index) => {
          return (
               <div data-aos="fade-left"><img src={item.news} alt="" /></div>
          )
        })}
     </Carousel>
      </div>
      <div className="downloadnewsletter">
        <a href="/assest/handbook/NSS Handbook.pdf">Download</a>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Newsletter





