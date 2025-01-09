import React from "react";
import * as cardStyles from "./card.module.css";

const Card = ({imgurl, title, updatedAt, tag}) => {
  return (
    <article className={cardStyles.cardwrapper}>
      <figure className={cardStyles.cardimg}>
        <img src={`http://127.0.0.1:1337${imgurl}`} alt="" />
      </figure>
      <div className={cardStyles.cardbody}>
        <h2 className={cardStyles.cardtitle}>{title}</h2>
        <section className={cardStyles.cardmeta}>
          <span className={cardStyles.cardtag}>{`#${tag}`}</span>
          <span className={cardStyles.carddate}>{updatedAt}</span>
        </section>
      </div>
    </article>
  );
};

export default Card;
