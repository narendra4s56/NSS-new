import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='fotter' id='fotterId'>
      <div className="left" id='leftid' >
        <img src="/assest/logo.png" alt="" />
        <h1>NSS SGSITS</h1>
      </div>
      <div className="middle" id='middleid' >
        <h3>QUICK LINKS</h3>
        <a href='/'>Home Page</a>
        <a href='/about'>About Us</a>
        <a href='/event'>Event</a>
        <a href='/team'>Team</a>
        <a href='/newsletter'>Newsletter</a>
        <a href='/handbook'>Handbook</a>
      </div>
      <div className="right" id='rightid' >
        <h3>CONTACT</h3>
       <p> <i class="fa-solid fa-house"></i> NSS SGSITS Office</p>
       <p> <i class="fa-solid fa-envelope"></i> nss.sgsits@gmail.com</p>
       <p> <i class="fa-solid fa-phone"></i> +91-99XXXXXXXX</p>
      </div>

      <div className="footericons">
        <a href="/"><img src="/assest/icons/email1.png" alt="" /></a>
        <a href="https://www.linkedin.com/company/nsssgsits/"><img src="/assest/icons/linkedin.png" alt="" /></a>
        <a href="https://www.instagram.com/nss_sgsits/"><img src="/assest/icons/instagram.png" alt="" /></a>
        <a href="https://www.facebook.com/nsssgsitsindore"><img src="/assest/icons/facebook1.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Footer
