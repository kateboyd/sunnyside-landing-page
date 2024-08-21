import React from 'react'
import desktopTransform from '../../assets/images/desktop/image-transform.jpg'
import TransformCopy from '../TransformCopy'
import './styles.css'

const DesktopTransform = () => {
  return (
    <section className="transform-section">
    <div className='transform-text'>
      <TransformCopy />
    </div>
    <div className='transform-image'>
      <img src={desktopTransform} alt="ice cream cone image" />
    </div>
    </section>

  );
}

export default DesktopTransform; 