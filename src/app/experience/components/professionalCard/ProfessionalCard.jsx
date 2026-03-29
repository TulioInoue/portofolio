import style from "./ProfessionalCard.module.css";

import JobDescription from "./jobdescription/JobDescription";

const ProfessionalCard = ({ name, img, periods }) => {
  return (
    <div className={style.professionalCard}>
      <div className={style.professionalCard__header}>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <div className={style.professionalCard__descriptions}>
        {periods.map((period) => (
          <JobDescription key={period.id} {...period} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCard;
