import style from "./Tech.module.css";

import SmallCard from "./components/smallcard/SmallCard";
import BigCard from "./components/bigcard/BigCard";

import { useState } from "react";

import { cards_fields, cards_content } from "./cards";

const Tech = () => {
  const [cardSelected, setCardSelected] = useState({
    field: "",
    id: null,
  });

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
              <div className={style.tech__body__cards_field_content}>
                {cards_content[card_field].map((card) => (
                  <SmallCard
                    key={card.id}
                    text={card.text}
                    icon={card.icon}
                    isSVG={card.isSVG}
                    color={card.color}
                    isSelected={
                      cardSelected.field === card_field &&
                      cardSelected.id === card.id
                    }
                    onClickFunction={() =>
                      setCardSelected(
                        card_field === cardSelected.field &&
                          card.id === cardSelected.id
                          ? {
                              field: "",
                              id: null,
                            }
                          : {
                              field: card_field,
                              id: card.id,
                            },
                      )
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={style.tech__body__bigcard}>
          {cardSelected.id ? (
            <BigCard
              key={cardSelected.id}
              {...cards_content[cardSelected.field].find(
                (card) => card.id === cardSelected.id,
              )}
            />
          ) : (
            <BigCard
              description="Click a button to know more about which tools I use."
              title="Unknown"
              text="My teach stack"
              img="icons/colorfull/unknown2.svg"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tech;
