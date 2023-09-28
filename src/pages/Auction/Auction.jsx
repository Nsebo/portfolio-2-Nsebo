import React from 'react';
import Details from '../../components/Details/Details';
import auctionHero from '../../assets/images/detail/desktop/image-auction-hero.jpg';
import auctionPreviewOne from '../../assets/images/detail/desktop/image-auction-preview-1.jpg';
import auctionPreviewTwo from '../../assets/images/detail/desktop/image-auction-preview-2.jpg';

const Auction = () => {
  return (
    <div>
      <Details
        buttonHref="https://profound-dolphin-ca0570.netlify.app/"
        buttonText="Visit Website"
        title="Auction"
        description="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section."
        tag="Interaction Design / Front End Development"
        stack="HTML / CSS / JS"
        projectBackground="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style."
        heroImg={auctionHero}
        staticImageOne={auctionPreviewOne}
        staticImageTwo={auctionPreviewTwo}
        nextHref="/Nstore"
        nextText="Nstore"
        prevHref="/Auction"
        prevText="Auction"
      />
    </div>
  );
};

export default Auction;
