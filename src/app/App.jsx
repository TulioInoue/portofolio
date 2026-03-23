import style from "./App.module.css";

import Navbar from "../components/navbar/Navbar";
import About from "./about/About";
import Tech from "./tech/Tech";
import Experience from "./experience/Experience";
import Project from "./projects/Projects";

const App = () => {
  return (
    <section id={style.app}>
      <Navbar />
      <About />
      <Tech />
      <Experience />
      <Project />
    </section>
  );
};

return App;
