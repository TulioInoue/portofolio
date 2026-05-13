import style from "./JobDescription.module.css";

const JobDescription = ({ level, role, startDate, endDate, description }) => {
  return (
    <div className={style.jobdescription}>
      <div className={style.jobdescription__position}>
        <p className={style.jobdescription__position_role}>{role}</p>
        <p className={style.jobdescription__position_date}>
          {startDate} - {endDate}
        </p>
      </div>
      <ul className={style.jobdescription__achievements}>
        {description.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
