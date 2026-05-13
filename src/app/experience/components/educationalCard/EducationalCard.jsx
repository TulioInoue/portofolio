import style from "./EducationalCard.module.css";

const EducationalCard = ({ img, type, degree, startDate, endDate }) => {
  return (
    <div className={style.educationalCard}>
      <div className={style.educationalCard__header}>
        <img src={img} alt={name} />
      </div>
      <div className={style.educationalCard__body}>
        <p className={style.educationalCard__body_name}>{degree}</p>
        <p className={style.educationalCard__body_degree}>{type}</p>
        <span>
          {startDate} - {endDate}
        </span>
        <div className={style.educationalCard__body_icon}>
          <i className="fi fi-rr-graduation-cap" />
        </div>
      </div>
    </div>
  );
};

export default EducationalCard;
