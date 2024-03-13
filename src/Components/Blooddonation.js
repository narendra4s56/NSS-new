import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Blooddonation.css'
import { Data } from './Data'
import { useState } from 'react'
import Table from './Table'
function Blooddonation() {
  useEffect(() => {
    AOS.init({duration : "1000" ,  delay : "50"})
  },[])
  const [query , setQuery] = useState("");
  console.log(query);
  const search = (data) => {
    if(!query.trim()){
      return [];
    }
    else {
      return  data.filter(
      (item) => 
      item.Name.toLowerCase().includes(query)||
      item.BG.toLowerCase().includes(query)
      )
    }
  }
  return (
    <div className='BloodDonation'>
      <h1 data-aos="zoom-in-down">Our Volunteers are alwayas ready for help</h1>
      <h3 data-aos="zoom-in-up">Find our volunteer with the same blood group.</h3>
      <div className="inputbox" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
         <input
          type="search" 
          placeholder='Search by Name or Blood Group'
          className='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
      </div>
       <Table Data={search(Data) }  data-aos="flip-right"></Table>
    </div>
  )
}

export default Blooddonation
