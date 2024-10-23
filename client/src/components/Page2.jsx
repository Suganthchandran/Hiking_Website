import React from 'react'
import img2 from '../Assets/02.png'
import '../styles/Page2.css';import { FaArrowRightLong } from "react-icons/fa6";

const Page2 = () => {
  return (
    <div className='page1'>

    <div className="page1-img">
        <img src={img2}/>
    </div>

      <div className="page2-text">
        <div className="page1-container">
          <div className='page2-big-head'>
             <h1>02</h1>
            </div>
        <div className='page2-getstarted'>
            <hr />
            <h5>GET STARTED</h5>
        </div>
        </div>
        <div className="page2-text-container">
        <h2>What level of Hike are you?</h2>
        <p>Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like.Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like.Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like.</p>
        
        <div className="page1-arrow">
           <div> <p>Read more</p> </div>
            <div> <FaArrowRightLong /> </div>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Page2
