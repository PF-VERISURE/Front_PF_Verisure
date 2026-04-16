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
    if (!data) return null;

    return (
        <div className={style.wrapper}>
        <img src={data.src} alt={data.label} className={style.logo} />

        <span
            className={style.tooltip}
            style={{
            backgroundColor: `var(--cat-rbg-${categorie})`
            }}
        >
            {data.label}
        </span>
        </div>
    );
};


//     switch (categorie) {

//     case "Agua_Limpia":
//         return (
//         <div className={style.wrapper}>
//             <img src={Agua_Limpia} alt="Logo Agua Limpia" className={style.logo} />
//             <span className={style.tooltip}>Agua Limpia</span>
//         </div>)

//     case "Buena_Salud":     
//         return <img src={Buena_Salud} alt="Logo Buena Salud" />;

//     case "Ciudad_Sostenibles":
//         return <img src={Ciudad_Sostenibles} alt="Logo Ciudad Sostenibles" />;

//     case "Energia_Limpia":
//         return <img src={Energia_Limpia} alt="Logo Energía Limpia" />;

//     case "Hambre_Cero":
//         return <img src={Hambre_Cero} alt="Logo Hambre Cero" />;

//     case "Igualdad_Genero":
//         return <img src={Igualdad_Genero} alt="Logo Igualdad de Género" />;

//     case "No_Pobreza":
//         return <img src={No_Pobreza} alt="Logo No Pobreza" />;

//     case "Produccion_Responsables":
//         return <img src={Produccion_Responsables} alt="Logo Producción Responsable" />;

//     case "Reduccion_Desigualdades":
//         return <img src={Reduccion_Desigualdades} alt="Logo Reducción de Desigualdades" />;

//     case "Vida_Submarina":
//         return <img src={Vida_Submarina} alt="Logo Vida Submarina" />;

//     default:
//         return null;
//   }
// };

export default CatLogo