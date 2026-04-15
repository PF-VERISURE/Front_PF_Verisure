import React from 'react'
import img from "../../../assets/Nombre_Verisure.png"
import style from "./VerisureName.module.css"

const VerisureName = () => {
  return (
    <main className={style.verisurename}>
      <p className={style.volonteer}> Voluntariado </p>
      <img src={img} alt="Nombre Verisure" className={style.logo}/>
    </main>
  )
}

export default VerisureName