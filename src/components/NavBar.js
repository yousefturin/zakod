/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './NavBar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
//   fix the logic of the buttn that on every refresh it shows back 
//   no matter what is the size of thescreen
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Zakod
            <i class="fab fa-codepen"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cryptography'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cryptography
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/information'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button &&
            <Link
                to='/sign-up'
              > <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
