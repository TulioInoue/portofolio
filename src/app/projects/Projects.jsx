import style from "./Projects.module.css";

import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    <section id={style.project}>
      <div>
        <h3>Projects</h3>
      </div>
      <div>
        <ProjectCard
          imgSrc="/images/projects/ecolungs.png"
          imgAlt="Ecolungs project"
        />
      </div>
    </section>
  );
};

export default Projects;
