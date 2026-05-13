import style from "./ProfessionalCard.module.css";

import JobDescription from "./jobdescription/JobDescription";

import { useState } from "react";

const ProfessionalCard = ({ name, img, periods }) => {
  const [role, setRole] = useState(periods[0]);

  return (
    <div className={style.professionalCard}>
      <div className={style.professionalCard__header}>
        <img src={img} alt={name} />
      </div>
      <div className={style.professionalCard__descriptions}>
        <div className={style.professionalCard__descriptions__icon}>
          <i className="fi fi-rr-briefcase" />
        </div>
        <JobDescription key={role.id} {...role} />
        <div className={style.professionalCard__descriptions__buttons}>
          {periods.length > 1 &&
            periods.map((period) => (
              <span
                className={
                  role.id === period.id
                    ? style.professionalCard__descriptions__button_active
                    : style.professionalCard__descriptions__button_deactive
                }
                key={period.id}
                onClick={() => setRole(periods.find((e) => e.id === period.id))}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
