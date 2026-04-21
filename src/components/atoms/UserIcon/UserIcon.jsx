import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../../../assets/Icons/UserIcon.png"
import style from "./UserIcon.module.css"

const UserIcon = () => {
  return (
    <>
        <NavLink to="/login"><img src={img} alt='Icono de usuario' className={style.img}/></NavLink>
    </>
  )
}

export default UserIcon