import style from "./Content.module.css";

const Content = () => {
  return (
    <>
      <section id={style.content}>
        <div className={style.content__links}>
          <a href="">
            <i className="fi fi-brands-whatsapp"></i>
          </a>
          <a href="">
            <i className="fi fi-brands-linkedin"></i>
          </a>
          <a href="">
            <i className="fi fi-brands-github"></i>
          </a>
        </div>
        <div className={style.content__header}>
          <h2>Hello, I'm Túlio Inoue</h2>
          <h3>Data Scientist & Full stack developer</h3>
        </div>
      </section>
    </>
  );
};

export default Content;
