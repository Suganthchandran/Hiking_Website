import React from 'react'
import img1 from '../Assets/03.png'
import '../styles/Page3.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Page3 = () => {
  return (
    <div id='page3' className='page1'>
      <div className="page1-text">
        <div className="page1-container">
        <div className='page1-big-head'>
             <h1>03</h1>
             </div>
        <div className='page3-getstarted'>
            <hr />
            <h5>WHERE YOU GO IS THE KEY</h5>
        </div>
        </div>
        <div className="page1-text-container">
        <h2>Understand Your Map & Timing</h2>
        <p>To start, print out hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
        <div className="page1-arrow">
           <div> <p>Read more</p> </div>
            <div> <FaArrowRightLong /> </div>
      </div>
      </div>
      </div>
    <div className="page1-img">
        <img src={img1}/>
    </div>
    </div>

  )
}

export default Page3
