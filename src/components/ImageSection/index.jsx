import React from 'react'
import desktopMilkbottles from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import desktopOrange from '../../assets/images/desktop/image-gallery-orange.jpg'
import desktopCone from '../../assets/images/desktop/image-gallery-cone.jpg'
import desktopSugarcubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'
import './styles.css'



const ImageSection = () => {
  return (
    <div className="image-section">
      <img className="image-section-item" src={desktopMilkbottles} alt="milkbottles image" />
      <img className="image-section-item" src={desktopOrange} alt="orange image" />
      <img className="image-section-item" src={desktopCone} alt="ice cream cone image" />
      <img className="image-section-item" src={desktopSugarcubes} alt="sugarcubes image" />
    </div>
  );
}

export default ImageSection;