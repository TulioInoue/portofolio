import style from "./Experience.module.css";

import EducationalCard from "./components/educationalCard/EducationalCard";
import ProfessionalCard from "./components/professionalCard/ProfessionalCard";

import {
  educationalExperience,
  professionalExperience,
} from "./experiences.js";

const Experience = () => {
  return (
    <section id={style.experience}>
      <div className={style.experience__header}>
        <h3 id="experiences">Experiences</h3>
      </div>
      <div className={style.experience__education}>
        <div className={style.experience__education_cards}>
          {educationalExperience.map((experience) => (
            <EducationalCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
      <div className={style.experience__professional}>
        {professionalExperience.map((experience) => (
          <ProfessionalCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
