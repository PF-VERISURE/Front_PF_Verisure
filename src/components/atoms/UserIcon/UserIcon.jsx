import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import img from "../../../assets/Icons/UserIcon.png"
import OngAvatar from "../../../assets/OngAvatar.png"
import AdminAvatar from "../../../assets/AdminAvatar.png"
import VoluntarioAvatar from "../../../assets/VoluntarioAvatar.png"
import style from "./UserIcon.module.css"
import { UserContext } from "../../../context/User/UserContext";

const getAvatar = (user) => {
  if (!user) return { src: img, className: style.default };

  if (user.role === "ONG") {
    return { src: OngAvatar, className: style.avatar };
  }

  if (user.role === "ADMIN") {
    return { src: AdminAvatar, className: style.avatar };
  }

  if (user.role === "EMPLOYEE") {
    return { src: VoluntarioAvatar, className: style.avatar };
  }

  return { src: img, className: style.default };
};

const UserIcon = () => {
  const { user } = useContext(UserContext);
  const { src, className } = getAvatar(user);

  return (
    <>
        <NavLink to="/login">
        <img src={src} alt='Icono de usuario' className={`${style.img} ${className}`}/>
        </NavLink>
    </>
  )
}

export default UserIcon