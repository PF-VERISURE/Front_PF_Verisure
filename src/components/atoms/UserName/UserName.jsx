import React, { useContext } from "react";
import style from "./UserName.module.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/User/UserContext";

const getDisplayName = (user) => {
  if (!user) return "";

  if (user.role === "ONG") {
    return user.name ?? "ONG"; 
  }

  if (user.role === "ADMIN") {
    return "ADMIN";
  }

  if (user.role === "EMPLOYEE") {
    return user.name ?? "Employee";
  }

  return "User";
};

const UserName = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <section className={style.username}>
          <p className={style.name}>{getDisplayName(user)}</p>
        </section>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </>
  );
};

export default UserName;