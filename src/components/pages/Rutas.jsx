import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../../context/User/UserContext';


const Rutas = () => {

const { user } = useContext(UserContext);
console.log(user);

  return (
    <>
      <h1>{user ? `Welcome ${user.firstName}` : "No user"} </h1>    
      <div>
        <NavLink to="/admin">admin</NavLink>
      </div>
      <div>
        <NavLink to="/admin/metricas">admin/metricas</NavLink>
      </div>
      <div>
        <NavLink to="/admin/proyectos">admin/proyectos</NavLink>
      </div>
      <div>
        <NavLink to="/admin/ongs/perfiles">admin/ongs/perfiles</NavLink>
      </div>
      <div>
        <NavLink to="/admin/voluntario/perfiles">admin/voluntario/perfiles</NavLink>
      </div>
      <div>
        <NavLink to="/voluntario">volontario</NavLink>
      </div>
      <div>
        <NavLink to="/voluntario/proyectos">employees/proyectos</NavLink>
      </div>
      <div>
        <NavLink to="/voluntario/certificados">employees/certificados</NavLink>
      </div>
      <div>
        <NavLink to="/ongs">ongs</NavLink>
      </div>
      <div>
        <NavLink to="/ongs/nuevo_proyecto">ongs/nuevo_proyecto</NavLink>
      </div>
      <div>
        <NavLink to="/ongs/proyectos">ongs/projects</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </>

  )
}

export default Rutas