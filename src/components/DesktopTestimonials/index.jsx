import React from 'react';
import testimonials from '../../data/testimonials';
import './styles.css'; // Assuming you have some styles for the component

const DesktopTestimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Client testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} className="testimonial-image" />
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-name"><strong>{testimonial.name}</strong></p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopTestimonials;