import React from 'react'
import img from "../../../assets/Nombre_Verisure.png"
import { NavLink } from "react-router-dom";
import style from "./VerisureName.module.css"

const VerisureName = () => {
  return (
    <section className={style.VerisureName}>
      <p className={style.volonteer}> Volontariado </p>
      <img src={img} alt="Nombre Verisure" className={style.logo}/>
    </section>
  )
}

export default VerisureName