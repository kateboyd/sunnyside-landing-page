import React from 'react'
import photographyImage from '../../assets/images/desktop/image-photography.jpg'
import './styles.css';


const DesktopPhotography = () => {
  return (
    <section className="photo-section">
      <div className="photo-image">
        <img src={photographyImage} alt="ice cream cone image" />
        <div  className="photo-copy">
          <h2>Photography</h2>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DesktopPhotography;







