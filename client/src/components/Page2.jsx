import React from 'react'
import img2 from '../Assets/02.png'
import '../styles/Page2.css';
const Page2 = () => {
  return (
    <div className='page2'>

    <div className="page2-img">
        <img src={img2}/>
    </div>

      <div className="page2-text">
        <div className="page2-container">
             <h1>02</h1>
        <div className='page2-getstarted'>
            <hr />
            <h5>Get Started</h5>
        </div>
        </div>
        <div className="page2-text-container">
        <h2>What level of Hike are you?</h2>
        <p>Determining what level of hiker you are can be an tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various webistes like.</p>
        <p>Read more</p></div>
      </div>
    </div>

  )
}

export default Page2
