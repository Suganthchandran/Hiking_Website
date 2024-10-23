import React from 'react'
import img1 from '../Assets/03.png'
import '../styles/Page3.css';
const Page3 = () => {
  return (
    <div className='page3'>
      <div className="page3-text">
        <div className="page3-container">
             <h1>03</h1>
        <div className='page3-getstarted'>
            <hr />
            <h5>Get Started</h5>
        </div>
        </div>
        <div className="page3-text-container">
        <h2>What level of Hike are you?</h2>
        <p>Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like.</p>
        <p>Read more</p></div>
      </div>
    <div className="page3-img">
        <img src={img1}/>
    </div>
    </div>

  )
}

export default Page3
