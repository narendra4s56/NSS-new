import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './about.css'
function About() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "50"})
  },[])
  return (
    <div className='About-main' id='About-main-id'>
      <Navbar></Navbar>
     <div className="about-content">
      <h1 data-aos="zoom-out-down">About</h1>
      <p data-aos="zoom-out-up">Greetings from the Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore, official website of the National Service Scheme (NSS). NSS SGSITS was founded with the goal of encouraging community involvement and social responsibility in our students. It is committed to promoting constructive social change.
         At NSS SGSITS, we think that young people have the ability to lead meaningful projects and improve their communities. By means of many outreach initiatives, service projects, and public awareness campaigns, our goal is to tackle urgent social concerns and significantly improve the lives of underprivileged individuals.
         Our team consists of enthusiastic and devoted volunteers that are committed to helping others and building a society that is more compassionate and kind. Through the encouragement of leadership, empathy, and teamwork, NSS SGSITS aims to empower its members and spur constructive social change.
         Come together with us as we work to create a more promising and equitable future for everybody. Let's work together to change the world, one act of kindness at a time.</p>
      <h1 data-aos="zoom-out-down">What we do ?</h1>
      <div className="whatwedo">
      <p data-aos="zoom-out-up">At NSS SGSITS, we are committed to engaging in a wide range of activities aimed at addressing social issues and fostering community development. Our initiatives encompass various spheres, including:</p>
      <p data-aos="fade-left"><h5 data-aos="fade-right">1.Community Service:</h5>We actively participate in community service projects aimed at improving the lives of marginalized and underprivileged individuals. From organizing health camps to conducting educational workshops, we strive to make a positive impact on the communities we serve.</p>
      <p data-aos="fade-left"><h5 data-aos="fade-right">2.Environmental Conservation:</h5>Recognizing the importance of environmental sustainability, we undertake initiatives to promote awareness about conservation and preservation of natural resources. Tree plantation drives, waste management campaigns, and clean-up initiatives are among our efforts to contribute to a greener future.</p>
      <p data-aos="fade-left"><h5 data-aos="fade-right">3.Education and Skill Development:</h5>We believe in the transformative power of education and skill development. Through tutoring programs, vocational training sessions, and career guidance workshops, we aim to empower individuals with the knowledge and skills needed to succeed in life.</p>
      <p data-aos="fade-left"><h5 data-aos="fade-right">4.Health and Wellness:</h5>The well-being of our communities is a top priority for us. We organize health awareness camps, blood donation drives, and sanitation campaigns to promote health and hygiene practices and address healthcare disparities.</p>
      <p data-aos="fade-left"><h5 data-aos="fade-right">5.Social Awareness Campaigns:</h5>From promoting gender equality to advocating for human rights, we actively engage in social awareness campaigns to address pressing issues and foster a culture of inclusivity and acceptance.</p>
      </div>
     
     </div>
     <Footer></Footer>
    </div>
  )
}

export default About
