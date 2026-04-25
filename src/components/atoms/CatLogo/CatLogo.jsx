import React from 'react'
import style from "./CatLogo.module.css"
import { categories } from "../../../utils/categories";

const normalize = (str) =>
  str?.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim() ?? "";

const CatLogo = ({ categorie }) => {
  if (!categorie) return null;

  const data =
    categories[categorie] ??
    Object.values(categories).find((_, i) =>
      normalize(Object.keys(categories)[i]) === normalize(categorie)
    );

  if (!data) {
    console.warn("[CatLogo] Sin coincidencia para:", categorie);
    return null;
  }

  return (
    <section className={style.wrapper}>
      <img src={data.src} alt={data.label} className={style.logo} />
      <span
        className={style.tooltip}
        style={{ backgroundColor: `var(--cat-rbg-${data.cssVar})` }}
      >
        {data.label}
      </span>
    </section>
  );
};

export default CatLogo;
