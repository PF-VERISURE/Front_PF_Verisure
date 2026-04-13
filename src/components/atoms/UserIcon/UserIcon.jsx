import React from 'react'
import img from "../../../assets/Icons/UserIcon.png"
import style from "./UserIcon.module.css"

const UserIcon = () => {
  return (
    <main>
        <img src={img} alt='Icono de usuario' className={style.img}/>
    </main>
  )
}

export default UserIcon