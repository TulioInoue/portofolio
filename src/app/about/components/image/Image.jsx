import style from "./Image.module.css";

const Image = () => {
  return (
    <section id={style.image}>
      <span className={style.image__green}></span>
      <div className={style.image__image}>
        <img src="images/me/tulio.png" alt="tulio" />
      </div>
      <span className={style.image__margenta}></span>
    </section>
  );
};

export default Image;
