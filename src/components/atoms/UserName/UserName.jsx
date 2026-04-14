import React from 'react'
import style from "./UserName.module.css"
import { NavLink } from "react-router-dom";

const UserName = () => {
  return (
    <NavLink to="/login">
        <p className={style.username}>
            Usuario
        </p>
    </NavLink>
  )
}

export default UserName