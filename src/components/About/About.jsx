import Card from '../Card/Card';
import styles from './About.module.scss';
import person from '../../assets/images/homepage/desktop/img-homepage-profile.jpg';

const About = () => {
  return (
    <section className={styles.about_container}>
      <img src={person} alt='My Picture' />
      <Card
        title='About Me'
        description='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Oslo, Norway. When I’m not coding, you’ll find me outdoors or indoor activities - gym. I love being out in nature whether that’s going for a walk or run and i also loving cooking, love trying different types of foods. I’d love you to check out my work.'
        buttonText='Go To Portfolio'
        buttonHref='portfolio'
      />
    </section>
  );
};

export default About;
