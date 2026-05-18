import style from "./Projects.module.css";

import ProjectCard from "./projectCard/ProjectCard";

import { projects } from "./projects";

const Projects = () => {
  return (
    <section id={style.project}>
      <div className={style.project__header}>
        <h3>Projects</h3>
      </div>
      <div className = {style.project__content}>
        {projects.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
