import style from "./BigCard.module.css";

const BigCard = ({ text, img, title, description }) => {
  return (
    <div id={style.bigcard}>
      <div className={style.bigcard__header}>
        <img src={img} alt={`icon_${title}`} />

        <p>{text}</p>
      </div>
      <hr />
      <div className={style.bigcard__body}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BigCard;
