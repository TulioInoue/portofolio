import style from "./ProjectCard.module.css";

export default function ProjectCard({
  imgSrc,
  imgAlt,
  name,
  description,
  technologies,
  links,
}) {
  return (
    <div className={style.projectCard}>
      <div className={style.projectCard__image}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={style.projectCard__content}>
        <div className={style.projectCard__content__description}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className={style.projectCard__content__tags}>
          {technologies["Data Science"].map((technology, key) => (
            <span
              key={key}
              className={style.projectCard__content__tags_science}
            >
              {technology}
            </span>
          ))}
          {technologies["Full Stack developer"].map((technology, key) => (
            <span
              key={key}
              className={style.projectCard__content__tags_developer}
            >
              {technology}
            </span>
          ))}
          {technologies["Infrastructures and DevOps"].map((technology, key) => (
            <span key={key} className={style.projectCard__content__tags_infra}>
              {technology}
            </span>
          ))}
        </div>
        <div className={style.projectCard__links}>
          {links.map((link, key) => (
            <a key={key} href={link.link} target="_blank">
              <i className={link.icon} />
              <p>{link.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
