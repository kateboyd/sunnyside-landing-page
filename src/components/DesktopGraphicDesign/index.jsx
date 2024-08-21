import React from 'react'
import graphicImage from '../../assets/images/desktop/image-graphic-design.jpg'
import './styles.css';


const DesktopGraphicDesign = () => {
  return (
    <section className="graphic-design-section">
      <div className="graphic-image">
        <img src={graphicImage} alt="ice cream cone image" />
        <div  className="graphic-copy">
          <h2>Graphic design</h2>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
      </div>
    </section>
  );
}

export default DesktopGraphicDesign;



