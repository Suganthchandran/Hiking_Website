import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-container">
          <div className="footer-text">
              <h3>MNTN</h3>
              <p className='footer-text-p1'>Get out there and discover your next slope , mountain & destination!</p>
              <p className='footer-text-p2'>Copyright2019 MNTN,Inc. Terms & Privacy</p>
          </div>
          <div className="footer-text2">
              <h3>More on The Blog</h3>
              <div className='footer-text2-li'>About MNTN</div>
              <div className='footer-text2-li'>Contributors & Writers</div>
              <div className='footer-text2-li'>Write For Us</div>
              <div className='footer-text2-li'>Contact Us</div>
              <div className='footer-text2-li'>Privacy Policy</div>
          </div>
          <div className="footer-text3">
            <h3>More on MNTN</h3>
            <div className='footer-text2-li'>The Team</div> 
            <div className='footer-text2-li'>Jobs</div>
            <div className='footer-text2-li'>Press</div>
          </div>
      </div>
    </div>
  )
}

export default Footer
