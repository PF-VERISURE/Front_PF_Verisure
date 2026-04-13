import React from 'react'
import img from "../../assets/Icons/UserIcon"
import style from "./UserIcon.module.css"

const UserIcon = () => {
  return (
    <div>
        <img src={img} alt='Icono de usuario' style={style.img}/>
    </div>
  )
}

export default UserIcon