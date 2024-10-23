import React, {useState, useEffect} from 'react'
import '../styles/Navbar.css'
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {

    const [isMenuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 800) {
            setMenuVisible(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

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
