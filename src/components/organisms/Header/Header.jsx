import React, { useContext } from 'react';
import LogoAndName from '../../molecules/LogoAndName/LogoAndName'
import style from "./Header.module.css"
import User from '../../molecules/User/User'
import { UserContext } from '../../../context/User/UserContext';

const Header = () => {

  const { logout, isLogged } = useContext(UserContext);

  return (
    <main className={style.header}>
      <section>
        <LogoAndName/>
      </section>
      
      <section className={style.userblock}>
        <User className={style.user}/>
        {isLogged && (<button text="Logout" type="button" onClick={logout} className={style.logout}> cerrar sesión </button>)}
      </section>
    </main>
  )
}

export default Header