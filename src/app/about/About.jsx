import style from "./About.module.css";

import Navbar from "./components/navbar/Navbar";
import Image from "./components/image/Image";
import Content from "./components/content/Content";

const About = () => {
  return (
    <section id={style.about}>
      <div className={style.about__navbar}>
        <Navbar />
      </div>
      <div className={style.about__image}>
        <Image />
      </div>
      <div className={style.about__content}>
        <Content />
      </div>
      <div className={style.about__description}>
        <p>
          I am a technology and science enthusiast with experience in
          <span> data science</span>, <span> machine learning</span>, and
          <span> full stack development</span>. My goal is to create intelligent
          and scalable solutions,
          <span> integrating artificial intelligence into systems </span>
          to optimize processes and drive business growth.
        </p>
      </div>
    </section>
  );
};

export default About;
