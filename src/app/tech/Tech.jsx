import style from "./Tech.module.css";

import SmallCard from "./components/smallcard/SmallCard";
import BigCard from "./components/bigcard/BigCard";

import { cards_fields, cards_content } from "./cards";

const Tech = () => {
  return (
    <section id={style.tech}>
      <div className={style.tech__header}>
        <h3>My Tech stack</h3>
      </div>
      <div className={style.tech__body}>
        <div className={style.tech__body__cards}>
          {cards_fields.map((card_field, key_field) => (
            <div key={key_field} className={style.tech__body__cards__field}>
              <h4>{card_field}</h4>
              {cards_content[card_field].map((card, key_card) => (
                <div
                  key={key_card}
                  className={style.tech__body__cards_field_content}
                >
                  <SmallCard
                    text={card.text}
                    icon={card.icon}
                    isSVG={card.isSVG}
                    color={card.color}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={style.tech__body__card}>
          <BigCard />
        </div>
      </div>
    </section>
  );
};

export default Tech;
