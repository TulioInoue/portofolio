import style from "./JobDescription.module.css";

const JobDescription = ({ level, role, startDate, endDate, description }) => {
  return (
    <div className={style.jobdescription}>
      <div className={style.jobdescription__position}>
        <p>
          {role} - {level}
        </p>
      </div>
      <div className={style.jobdescription__date}>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <ul className={style.jobdescription__achievements}>
        {description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
