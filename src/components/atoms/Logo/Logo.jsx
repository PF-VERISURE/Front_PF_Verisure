import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../../../assets/Logo.png"
import style from "./Logo.module.css"


const Logo = () => {
  return (
    <main>
      <NavLink to="/"><img src={img} alt="Logo Verisure" className={style.logo}/></NavLink>
    </main>
  )
}

export default Logo