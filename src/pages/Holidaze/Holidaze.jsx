import React from 'react';
import Details from '../../components/Details/Details';
import holidazeHero from '../../assets/images/detail/desktop/image-holidaze-hero.jpg';
import holidazePreviewOne from '../../assets/images/detail/desktop/image-holidaze-preview-1.jpg';
import holidazePreviewTwo from '../../assets/images/detail/desktop/image-holidaze-preview-2.jpg';

const Holidaze = () => {
  return (
    <div>
      <Details
        buttonHref='/'
        buttonText='Visit Website'
        title='Holidaze'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
        tag='Interaction Design / Front End Development'
        stack='HTML / CSS / JS'
        projectBackground='This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        heroImg={holidazeHero}
        staticImageOne={holidazePreviewOne}
        staticImageTwo={holidazePreviewTwo}
        nextHref='/gamehub'
        nextText='GameHub'
        prevHref='/nstore'
        prevText='Nstore'
      />
    </div>
  );
};

export default Holidaze;
