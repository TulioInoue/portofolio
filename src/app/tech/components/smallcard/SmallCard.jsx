import style from "./SmallCard.module.css";

const SmallCard = ({ text, icon, color, isSVG }) => {
  return (
    <div className={style.card__color}>
      <div className={style.card__color_icon}>
        {isSVG ? (
          <img src={icon} alt={`icon_${text}`} />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <div className={style.card__color_text}>{text}</div>
    </div>
  );
};

export default SmallCard;
