import style from "./About.module.css";

import Navbar from "./components/navbar/Navbar";
import Image from "./components/image/Image";
import Content from "./components/content/Content";

const About = () => {
  return (
    <section id={style.about}>
      <Navbar />
      <section id={style.about__content}>
        <Image />
        <Content />
      </section>
    </section>
  );
};

export default About;
