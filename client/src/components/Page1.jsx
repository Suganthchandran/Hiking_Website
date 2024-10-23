import React from 'react'
import img1 from '../Assets/01.png'
import '../styles/Page1.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Page1 = () => {
  return (
    <div className='page1'>
      <div className="page1-text">
        <div className="page1-container">
          <div className='page1-big-head'>
             <h1>01</h1>
             </div>
        <div className='page1-getstarted'>
            <hr />
            <h5>GET STARTED</h5>
        </div>
        </div>
        <div className="page1-text-container">
        <h2>What level of Hike are you?</h2>
        <p>Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like All Trails and Modern Hiker.What type of hiker are you -novice, moderate, advanced moderate, expert or expert backpacker?.</p>
        
        <div className="page1-arrow">
           <div> <p>Read more</p> </div>
            <div className='page1-arrow1'> <FaArrowRightLong /> </div>
      </div>
        </div>
      </div>

      <div className="page1-img">
        <img src={img1}/>
      </div>
    </div>

  )
}

export default Page1
