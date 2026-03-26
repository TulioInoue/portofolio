import style from "./App.module.css";

import About from "./about/About";
import Tech from "./tech/Tech";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <section id={style.app}>
      <section id={style.app__content}>
        <About />
        <Tech />
        <Experience />
        <Projects />
      </section>
      <section id={style.app__background}>
        <span className={style.app__background_first}></span>
        <span className={style.app__background_last}></span>
      </section>
    </section>
  );
};

export default App;
