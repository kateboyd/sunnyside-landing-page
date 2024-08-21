import React from 'react'
import desktopStandOut from '../../assets/images/desktop/image-stand-out.jpg'
import './styles.css'
import StandOutCopy from '../StandOutCopy'

const DesktopStandOut = () => {
  return (
    <section className="transform-section">
    <div className='transform-image'>
      <img src={desktopStandOut} alt="ice cream cone image" />
    </div>
    <div className='transform-text'>
      <StandOutCopy />
    </div>
    </section>

  );
}

export default DesktopStandOut; 

