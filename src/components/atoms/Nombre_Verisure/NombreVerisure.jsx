import React from 'react'
import img from "../../../assets/Nombre_Verisure.png"
import { NavLink } from "react-router-dom";
import style from "./NombreVerisure.module.css"

const NombreVerisure = () => {
  return (
    <section className={style.NombreVerisure}>
      <p className={style.volontariado}> Volontariado </p>
      <img src={img} alt="Nombre Verisure" className={style.logo}/>
    </section>
  )
}

export default NombreVerisure