import style from "./Experience.module.css";

import EducationalCard from "./components/educationalCard/EducationalCard";
import ProfessionalCard from "./components/professionalCard/ProfessionalCard";

import {
  educationalExperience,
  professionalExperience,
} from "./experiences.js";

const Experience = () => {
  console.log("educationalExperience:", educationalExperience);
  console.log("professionalExperience:", professionalExperience);

  return (
    <section id={style.experience}>
      <div className={style.experience__header}>
        <h3>my experiences</h3>
      </div>
      <div className={style.experience__education}>
        <h4>education</h4>
        <div className={style.experience__education_cards}>
          {educationalExperience.map((experience) => (
            <EducationalCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
      <div className={style.experience__professional}>
        <h4>professional</h4>
        <div className={style.experience__professional__cards}>
          {professionalExperience.map((experience) => (
            <ProfessionalCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
