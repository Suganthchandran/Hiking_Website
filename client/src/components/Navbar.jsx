import React from 'react'
import '../styles/Navbar.css'
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-start'>
            <h1>MNTN</h1>
        </div>

        <div className='navbar-center'>
                <div>
                    <h1>Equipment</h1>
                </div>

                <div>
                    <h1>About Us</h1>
                </div>

                <div>
                    <h1>Blog</h1>
                </div>
        </div>

        <div className='navbar-end'>
            <div className='navbar-end-icon'><VscAccount /></div>
            <div><h1>Account</h1></div>
        </div>
    </div>
  )
}

export default Navbar
