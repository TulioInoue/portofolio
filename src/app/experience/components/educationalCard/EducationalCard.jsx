import style from "./EducationalCard.module.css";

const EducationalCard = ({ img, name, degree, startDate, endDate }) => {
  return (
    <div className={style.educationalCard}>
      <div className={style.educationalCard__header}>
        <img src={img} alt={name} />
      </div>
      <div className={style.educationalCard__body}>
        <div>
          <p className={style.educationalCard__body_name}>{name}</p>
          <p className={style.educationalCard__body_degree}>{degree}</p>
        </div>
        <span>
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
};

export default EducationalCard;
