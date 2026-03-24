import style from "./Image.module.css";

const Image = () => {
  return (
    <section id={style.image}>
      <img className={style.image__image} src="tulio-hero.png" alt="tulio" />
    </section>
  );
};

export default Image;
