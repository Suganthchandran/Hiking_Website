import React from 'react'
import '../styles/Banner.css'
import banner from '../Assets/background.png'
import Navbar from './Navbar'
import { SiInstagram } from "react-icons/si";
import { RiTwitterLine } from "react-icons/ri";
import { FaLongArrowAltDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-navbar'>
        <Navbar />
      </div>
      <section className="banner-image" style={{ backgroundImage: `url(${banner})` }}>
        <div className='banner-main'>
        <div className='banner-start'>
          <div className='banner-start-text'>
                Follow Us
                     </div>

          <div className='banner-start-link'>
            <SiInstagram />
          </div>

          <div className='banner-start-link'>
            <RiTwitterLine />
          </div>
        </div>

        <div className='banner-center'>
          <div className='banner-center-1'>
            <hr className='banner-line' />
            <h1>A HIKING GUIDE</h1>
          </div>

          <div className='banner-center-2'>
            <h1>Be Prepared For The</h1>
            <h1>Mountains And Beyond!</h1>
          </div>

          <div className='banner-center-3'>
            <h1>Scroll down</h1>
            <span className='banner-scroll-down-icon'><FaLongArrowAltDown /></span>
          </div>
        </div>

        <div className='banner-end'>
          <div className='banner-end-1'>
            <div style={{cursor:'pointer'}}>
              Start
            </div>
            <div style={{cursor:'pointer'}}>
            <a href='#page1'>01</a>  
            </div>
            <div style={{cursor:'pointer'}}>
            <a href='#page2'>02</a>  
            </div>
            <div style={{cursor:'pointer'}}>
            <a href='#page3'>03</a>  
            </div>
          </div>

          <div className='banner-end-2'>
              <hr className='banner-end-line' />
              {/* <hr className='banner-end-line-overlay' /> */}
          </div>
        </div>
        </div>
        <div className="overlay"></div> 
      </section>
    </div>
  )
}

export default Banner
