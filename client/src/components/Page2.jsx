import React from 'react'
import img2 from '../Assets/02.png'
import '../styles/Page2.css';import { FaArrowRightLong } from "react-icons/fa6";

const Page2 = () => {
  return (
    <div id='page2' className='page1'>

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
            <h5>HIKING ESSENTIALS</h5>
        </div>
        </div>
        <div className="page2-text-container">
        <h2>Picking the right Hiking Gear!</h2>
        <p>The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
        
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
