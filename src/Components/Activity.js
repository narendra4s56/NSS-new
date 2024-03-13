import React from 'react'
import './Activity.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Activity() {
    useEffect(() => {
        AOS.init({duration : "1000" ,  delay : "50"})
      },[])
  return (
  <>
  <div className="activities">

 
    <div className='destination'>
      <h1 data-aos="fade-left">Regular Activities</h1>
      <p data-aos="fade-up">NSS regularly organizes a variety of activities aimed at fostering community engagement, personal development, and social responsibility.</p>
    </div>
    <div className="first-des">
        <div className="des-text" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Orientation</h2>
            <p>During the orientation, we explored Swami Vivekananda's teachings on service and selflessness, engaging in discussions and activities to understand their relevance to our mission. It was a valuable opportunity for all participants to reflect on how we can apply these principles in our work with NSS and beyond.</p>
        </div>
        <div className="image" >
            <img src="/assest/Activity/orientation.jpeg" alt="img" data-aos="flip-left" />
            <img src="/assest/Activity/orintetion1.jpg" alt="img" data-aos="flip-right" />
        </div>
    </div>


    <div className="first-des">
        <div className="des-text" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Swachchhata</h2>
            <p>NSS recently organized a 'Swachchhata' activity, aimed at promoting cleanliness and environmental awareness in our community. Volunteers actively participated in cleaning up public spaces, collecting waste, and raising awareness about the importance of maintaining a clean and hygienic environment.</p>
        </div>
        <div className="image">
            <img src="/assest/Activity/clean2.jpeg" alt="img" data-aos="flip-right"/>
            <img src="/assest/Activity/clean.jpeg" alt="img" data-aos="flip-left"/>
        </div>
    </div>

    <div className="first-des">
        <div className="des-text"  data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Games Activity</h2>
            <p>"NSS recently organized a Games Activity, providing participants with an opportunity for recreation, camaraderie, and physical activity. The event featured a range of engaging games and sports, fostering teamwork, sportsmanship, and healthy competition among attendees. Through this initiative, NSS aims to promote holistic well-being and social integration within our community.</p>
        </div>
        <div className="image">
            <img src="/assest/Activity/game.jpg" alt="img" data-aos="flip-left"/>
            <img src="/assest/Activity/recruitmet.jpg" alt="img" data-aos="flip-right"/>
        </div>
    </div>
    
    </div>
    </>
  )
}

export default Activity
