import style from "./SmallCard.module.css";

const SmallCard = ({
  text,
  icon,
  color,
  isSVG,
  isSelected,
  onClickFunction,
}) => {
  return (
    <button
      onClick={() => onClickFunction()}
      className={
        color === "green"
          ? style.card__green__color
          : color === "margenta"
            ? style.card__margenta__color
            : style.card__orange__color
      }
      id={isSelected ? style.card__is_selected : null}
    >
      <div className={style.card__color_icon}>
        {isSVG ? (
          <img src={icon} alt={`icon_${text}`} />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <div className={style.card__color_text}>{text}</div>
    </button>
  );
};

export default SmallCard;
