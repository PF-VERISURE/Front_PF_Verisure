import React from 'react'
import style from "./OngProjects.module.css"
import ProjectList from '../../../organisms/ProjectList/ProjectList'

const OngProjects = ({title}) => {
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <ProjectList title="EXPLORAR PROYECTOS"/>
    </main>
  )
}

export default OngProjects