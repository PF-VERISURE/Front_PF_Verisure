import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import LogoAndName from '../../molecules/LogoAndName/LogoAndName';
import style from "./Header.module.css";
import User from '../../molecules/User/User';
import { UserContext } from '../../../context/User/UserContext';

const Header = () => {

  const { logout, isLogged } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();                   
    navigate("/login");          
  };

  return (
    <main className={style.header}>
      <section>
        <LogoAndName/>
      </section>
      
      <section className={style.userblock}>
        <User className={style.user}/>
        {isLogged && (
          <button 
            type="button" 
            onClick={handleLogout} 
            className={style.logout}
          >
            cerrar sesión
          </button>
        )}
      </section>
    </main>
  );
};

export default Header;