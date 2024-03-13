import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer';
import Activity from '../Components/Activity';
import Aayam2024 from '../Components/Aayam2024';
import Blooddonation from '../Components/Blooddonation';
import './Home.css'
function Home() {
  const image = ["/assest/cean.jpg","/assest/cean.jpg","/assest/cean.jpg"];
  return (
    <div>
      <Navbar></Navbar>
      <Hero
      cName="home-hero"
      heroImg="/assest/home2.jpg"
      title="NSS SGSITS"
      text="Not Me But You"
      url="/"
      btnClass="show"
      Id="home-hero-id"
      ></Hero>
      <Aayam2024></Aayam2024>
      <Activity></Activity>
      <Blooddonation></Blooddonation>
      <Footer></Footer>
    </div>
  )
}

export default Home
