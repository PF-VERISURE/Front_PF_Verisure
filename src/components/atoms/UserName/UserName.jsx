import React, {useContext} from 'react'
import style from "./UserName.module.css"
import { NavLink } from "react-router-dom";
import { UserContext } from '../../../context/User/UserContext';

const UserName = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <section className={style.username}>
          <p className={style.name}>
            {user.firstName}
          </p>
          <p  className={style.login}>
            {user.email}
          </p>
        </section>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </>
  );
};

export default UserName;