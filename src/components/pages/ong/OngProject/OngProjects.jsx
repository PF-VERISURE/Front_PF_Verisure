import React from 'react'
import style from "./OngProjects.module.css"
import OngMyProjects from '../../../organisms/OngMyProjects/OngMyProjects'



const OngProjects = ({title}) => {
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <OngMyProjects title="Mis Proyectos"/>
    </main>
  )
}

export default OngProjects