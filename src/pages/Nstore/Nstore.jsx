import React from 'react';
import Details from '../../components/Details/Details';
import nstoreHero from '../../assets/images/detail/desktop/image-nstore-hero.jpg';
import nstorePreviewOne from '../../assets/images/detail/desktop/image-nstore-preview-1.jpg';
import nstorePreviewTwo from '../../assets/images/detail/desktop/image-nstore-preview-2.jpg';

const Nstore = () => {
  return (
    <div>
      <Details
        buttonHref="https://teal-smakager-0fcea8.netlify.app/"
        buttonText="Visit Website"
        title="Nstore"
        description="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        tag="Interaction Design / Front End Development"
        stack="HTML / CSS / JS"
        projectBackground="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style."
        heroImg={nstoreHero}
        staticImageOne={nstorePreviewOne}
        staticImageTwo={nstorePreviewTwo}
        nextHref="/Holidaze"
        nextText="Holidaze"
        prevHref="/NseboStore"
        prevText="NseboStore"
      />
    </div>
  );
};

export default Nstore;
