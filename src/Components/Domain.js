import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Domain.css'
import { DomainsContainer } from './DomainsContainer'
function Domain() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "50"})
  },[])
  return (
    <div className='domainContent' id='domainContentId'>
      <h1 data-aos="zoom-in-down">Domains</h1>
      <p data-aos="zoom-in-up">Heads of Domains</p>
      <div className='domainMember'>
        {
            DomainsContainer.map((item , index) => {
                return (
                    <>
                    <div className="particularContainer" data-aos="flip-left">
                    <img src={item.img} alt=" Team Image" className='memberImage' />
                     <h1>{item.name}</h1>
                     <h1>{item.position}</h1>
                    </div>
                   
                     </>
                )
            })
        }
      </div>
    </div>
  )
}

export default Domain
