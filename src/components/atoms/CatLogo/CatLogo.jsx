import React from 'react'
import style from "./CatLogo.module.css"

import { categories } from "../../../utils/categories";

const CatLogo = ({ categorie }) => {
  const data = categories[categorie];

  if (!data) {
    return null;
  }

  return (
    <section className={style.wrapper}>
      <img src={data.src} alt={data.label} className={style.logo} />

      <span
        className={style.tooltip}
        style={{
          backgroundColor: `var(--cat-rbg-${data.cssVar})`
        }}
      >
        {data.label}
      </span>
    </section>
  );
};

export default CatLogo