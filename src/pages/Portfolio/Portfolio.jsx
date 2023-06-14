import Card from '../../components/Card/Card';
import styles from './Portfolio.module.scss';
import auction from '../../assets/images/portfolio/desktop/img-portfolio-auction.jpg';
import holidaze from '../../assets/images/portfolio/desktop/img-portfolio-holidaze.jpg';
import gamehub from '../../assets/images/portfolio/desktop/img-portfolio-gamehub.jpg';
import nstore from '../../assets/images/portfolio/desktop/img-portfolio-nstore.jpg';
import Interested from '../../components/Interested/Interested';
import Layout from '../../layouts/Layout/Layout';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolio_container}>
        <div className={styles.space}>
          <img src={auction} alt='project thumbnail' />
          <Card
            title='Auction'
            description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
            buttonHref='/auction'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={`${styles.space} ${styles.reverse}`}>
          <img src={nstore} alt='project thumbnail' />
          <Card
            title='Nstore'
            description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.'
            buttonHref='/nstore'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={styles.space}>
          <img src={holidaze} alt='project thumbnail' />
          <Card
            title='Holidaze'
            description='This was a big project which mostly consisted of vite, Sass, javascript framework such as react. The only JavaScript this project required was to enable the toggling of the mobile navigation.'
            buttonHref='/holidaze'
            buttonText='View Project'
            pad={true}
          />
        </div>
        <div className={`${styles.space} ${styles.reverse}`}>
          <img src={gamehub} alt='project thumbnail' />
          <Card
            title='Gamehub'
            description='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.'
            buttonHref='/gamehub'
            buttonText='View Project '
            pad={true}
          />
        </div>
        <Interested />
      </section>
    </>
  );
};

export default Portfolio;
