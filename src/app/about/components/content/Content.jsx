import style from "./Content.module.css";

const Content = () => {
  return (
    <>
      <section id={style.content}>
        <div className={style.content__links}>
          <a
            href="/download/Tulio_Inoue_CV_en.pdf"
            download={"Tulio_Inoue_CV_en.pdf"}
          >
            <i className="fi fi-rr-resume"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=11949284455&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <i className="fi fi-brands-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tulio-inoue-datascientist/"
            target="_blank"
          >
            <i className="fi fi-brands-linkedin"></i>
          </a>
          <a href="https://github.com/TulioInoue" target="_blank">
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
