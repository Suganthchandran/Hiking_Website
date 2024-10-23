import React from 'react'
import '../styles/Banner.css'
import banner from '../Assets/background.png'
import Navbar from './Navbar'
import { SiInstagram } from "react-icons/si";
import { RiTwitterLine } from "react-icons/ri";
import { FaLongArrowAltDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className='banner-navbar'>
        <Navbar />
      </div>
      <section className="banner-image" style={{ backgroundImage: `url(${banner})` }}>
        <div className='banner-main'>
        <div className='banner-start'>
          <div className='banner-start-text'>
                Follow Us
                     </div>

          <div>
            <SiInstagram />
          </div>

          <div>
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
            <div>
              Start
            </div>
            <div>
              01
            </div>
            <div>
              02
            </div>
            <div>
              03
            </div>
          </div>

          <div className='banner-end-2'>
              <hr className='banner-end-line' />
              <hr className='banner-end-line-overlay' />
          </div>
        </div>
        </div>
        <div className="overlay"></div>
      </section>
    </div>
  )
}

export default Banner
