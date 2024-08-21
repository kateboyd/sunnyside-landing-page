import React from 'react'
import headerImage from '../../assets/images/desktop/image-header.jpg'
import DesktopNavBar from '../DesktopNavBar';
import './styles.css';


const DesktopHeader = () => {
  return (
    <section className="desktop-header-section">
      <div className="header-image">
        <img src={headerImage} alt="ice cream cone image" />
        <div><h2 className="headline">WE ARE CREATIVES</h2></div>
        <div className='nav-bar'>      
          <DesktopNavBar />
        </div>
      </div>
    </section>
  );
}

export default DesktopHeader;