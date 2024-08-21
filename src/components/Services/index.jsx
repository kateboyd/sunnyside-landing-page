import React from 'react'
import './styles.css'
import DesktopGraphicDesign from '../DesktopGraphicDesign'
import DesktopPhotography from '../DesktopPhotography';

const Services = () => {
  return (
    <section className="transform-section">
    <div className='transform-image'>
      <DesktopGraphicDesign />
    </div>
    <div className='transform-image'>
      <DesktopPhotography />
    </div>
    </section>

  );
}

export default Services; 

