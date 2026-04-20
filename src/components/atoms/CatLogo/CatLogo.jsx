import React from 'react'
import style from "./CatLogo.module.css"
import Agua_Limpia from "../../../assets/Cat_Icons/Agua_Limpia.png";
import Buena_Salud from "../../../assets/Cat_Icons/Buena_Salud.png";
import Ciudad_Sostenibles from "../../../assets/Cat_Icons/Ciudad_Sostenibles.png";
import Energia_Limpia from "../../../assets/Cat_Icons/Energia_Limpia.png";
import Hambre_Cero from "../../../assets/Cat_Icons/Hambre_Cero.png";
import Igualdad_Genero from "../../../assets/Cat_Icons/Igualdad_Genero.png";
import No_Pobreza from "../../../assets/Cat_Icons/No_Pobreza.png";
import Produccion_Responsables from "../../../assets/Cat_Icons/Produccion_Responsables.png";
import Reduccion_Desigualdades from "../../../assets/Cat_Icons/Reduccion_Desigualdades.png";
import Vida_Submarina from "../../../assets/Cat_Icons/Vida_Submarina.png";

import { categories } from "../../../utils/categories";

const CatLogo = ({ categorie }) => {
  const data = categories[categorie];

  if (!data) {
    console.warn("Unknown category:", categorie);
    return null;
  }

  return (
    <div className={style.wrapper}>
      <img src={data.src} alt={data.label} className={style.logo} />

      <span
        className={style.tooltip}
        style={{
          backgroundColor: `var(--cat-rbg-${data.cssVar})`
        }}
      >
        {data.label}
      </span>
    </div>
  );
};

export default CatLogo