import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from '../Components/Navbar'
import { HandbookContainer }  from './HandbookContainer'
import Footer from '../Components/Footer'
import './Handbook.css'
function Handbook() {
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
      <div className="handbookcontent">
        <h1>Handbook</h1>
      <Carousel responsive={responsive} className='content' axis='vertical'>
        {HandbookContainer.map((item,index) => {
          return (
               <div><img src={item.content} alt="" /></div>
          )
        })}
     </Carousel>
      </div>
      <div className="downloadhandbook">
        <a href="/assest/handbook/NSS Handbook.pdf">Download</a>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Handbook