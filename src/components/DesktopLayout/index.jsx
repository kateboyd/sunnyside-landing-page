import React from 'react'
import DesktopTransform from '../DesktopTransform';
import DesktopHeader from '../DesktopHeader';
import DesktopStandOut from '../DesktopStandOut';
import ImageSection from '../ImageSection';
import Services from '../Services';
import './styles.css';
import DesktopTestimonials from '../DesktopTestimonials';

const DesktopLayout = () => {
  return (
    <div className="desktop-container">
        <DesktopHeader />
        <DesktopTransform />
        <DesktopStandOut />
        <Services /> 
        <DesktopTestimonials /> 
        <ImageSection />
    </div>
  );
}

export default DesktopLayout;