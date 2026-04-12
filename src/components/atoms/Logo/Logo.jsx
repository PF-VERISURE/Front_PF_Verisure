import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../../../assets/Logo.png"
import style from "./Logo.module.css"


const Logo = () => {
  return (
    <div>
      <NavLink to="/"><img src={img} alt="Logo Verisure" className={style.logo}/></NavLink>
    </div>
  )
}

export default Logo