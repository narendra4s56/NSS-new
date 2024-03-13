import React from 'react'
import './Aayam2024.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Aayam2024() {
    useEffect(() => {
        AOS.init({duration : "700" ,  delay : "100"})
      },[])
  return (
  <>
  <div className="activities">
    <div className='destination'>
        <h2 data-aos="fade-left">Shri Govindram Seksaria Institute of Technology and Science Indore</h2>
      <h1 data-aos="fade-right">Aayam 2024</h1>
      <p data-aos="zoom-out-up">Cultural fest</p>
    </div>
    <div className="first-des">
        <div className="des-text" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Kaho Kahani</h2>
            <p>The storytelling platform of NSS SGSITS! Through Kaho Kahani, we aim to amplify voices, share experiences, and foster a sethe nse of community through the art of storytelling. Here's what Kaho Kahani is all about: Kaho Kahani is a platform that encourages the sharing of diverse stories and experiences by members of the SGSITS community. The platform celebrates diversity and encourages individuals from all backgrounds to contribute their unique perspectives.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUqxbkYFvYNNfk5B2nyfd8g5ktlub_psapy4rtgGvLT2ZVMg/viewform">Do Register Fast </a>
        </div>
        <div className="image">
            <img src="/assest/aayam2024/kahaokahani1.jpg" alt="img" data-aos="fade-up" />
            <img src="/assest/aayam2024/sneha.jpeg" alt="img" data-aos="fade-down"/>
        </div>
    </div>
    <div className="first-des">
        <div className="des-text" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Satrang</h2>
            <p>NSS SGSITS presents "SATRANG"  
                  The Symphony of Joy!💫

                 Get ready to dive into a day packed with excitement and friendly competition! Come join us on a symphony filled with various games guaranteed to keep you entertained from start to finish.

                 Prizes will be up for grabs, but the real reward is the laughter and memories you'll create along the way.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4whU1x19OHBr1dgEzwOEC8hx7mUlMb16iNKEwpPYaHI0LKg/viewform">Do Register Fast </a>
        </div>
        <div className="image">
            <img src="/assest/aayam2024/satrang.jpeg" alt="img" data-aos="fade-up"/>
            <img src="/assest/aayam2024/satarang2.jpeg" alt="img" data-aos="fade-down"/>
        </div>
    </div>
    <div className="first-des">
        <div className="des-text" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Nukkad Natak</h2>
            <p>At NSS SGSITS, we harness the power of theater to drive social change, raise awareness, and inspire action. Through our engaging and thought-provoking Nukkad Natak performances, we address pressing social issues, challenge stereotypes, and ignite conversations within our community. Here's an insight into our impactful Nukkad Natak initiatives:</p>
        </div>
        <div className="image">
            <img src="/assest/aayam2024/nukkad3.jpg" alt="img" data-aos="fade-up"/>
            <img src="/assest/aayam2024/aayam.jpg" alt="img" data-aos="fade-down"/>
        </div>
    </div>

    
    </div>
    </>
  )
}

export default Aayam2024
