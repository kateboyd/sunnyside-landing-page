import React from 'react'
import logo from '../../assets/images/logo.svg'
import './styles.css';

const DesktopNavBar = () => {
  return (
    <div className='navbar'>
      <img className="logo "src={logo} alt="logo" />
      <div className="navitems">
        <button className="navbutton">About</button>
        <button className="navbutton">Services</button>
        <button className="navbutton">Projects</button>
        <button className="contact">CONTACT</button>
      </div> 
    </div>
  );
}

export default DesktopNavBar;