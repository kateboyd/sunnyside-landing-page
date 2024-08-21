import React from 'react'
import DesktopTransform from '../DesktopTransform';
import DesktopHeader from '../DesktopHeader';
import DesktopStandOut from '../DesktopStandOut';
import ImageSection from '../ImageSection';
import Services from '../Services';

const DesktopLayout = () => {
  return (
    <div>
        <DesktopHeader />
        <DesktopTransform />
        <DesktopStandOut />
        <Services />  
        <ImageSection />
    </div>
  );
}

export default DesktopLayout;