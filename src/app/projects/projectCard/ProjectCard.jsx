import style from "./ProjectCard.module.css";

export default function ProjectCard({ imgSrc, imgAlt }) {
  return (
    <div className={style.projectCard}>
      <div className={style.projectCard__image}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={style.projectCard__content}>
        
      </div>
    </div>
  );
}
