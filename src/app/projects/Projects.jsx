import style from "./Projects.module.css";

import ProjectCard from "./projectCard/ProjectCard";

import { project } from "./project";

export default function Projects() {
  return (
    <section id={style.project}>
      <div className={style.project__header}>
        <h3 id="projects">Projects</h3>
      </div>
      <div className={style.project__content}>
        {project.map((job, key) => (
          <ProjectCard {...job} key={key} />
        ))}
      </div>
    </section>
  );
}
