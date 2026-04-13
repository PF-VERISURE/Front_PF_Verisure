import React from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>    
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
        <NavLink to="/admin/ong/perfiles">admin/ong/perfiles</NavLink>
      </div>
      <div>
        <NavLink to="/admin/volontario/perfiles">admin/volontario/perfiles</NavLink>
      </div>
      <div>
        <NavLink to="/volontario">volontario</NavLink>
      </div>
      <div>
        <NavLink to="/volontario/proyectos">volontario/proyectos</NavLink>
      </div>
      <div>
        <NavLink to="/volontario/certificados">volontario/certificados</NavLink>
      </div>
      <div>
        <NavLink to="/ong">ong</NavLink>
      </div>
      <div>
        <NavLink to="/ong/nuevo_proyecto">ong/nuevo_proyecto</NavLink>
      </div>
    </>

  )
}

export default Login