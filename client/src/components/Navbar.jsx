import React, {useState, useEffect} from 'react'
import '../styles/Navbar.css'
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >
        <div className='navbar-start'>
            <h1>MNTN</h1>
        </div>

        <div className='navbar-center'>
                <div className='navbar-center-element'>
                    <h1>Equipment</h1>
                </div>

                <div className='navbar-center-element'>
                    <h1>About Us</h1>
                </div>

                <div className='navbar-center-element'>
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
