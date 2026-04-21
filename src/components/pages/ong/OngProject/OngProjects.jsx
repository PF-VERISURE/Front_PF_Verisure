import React from 'react'
import style from "./OngProjects.module.css"
import PendingProjectList from '../../../organisms/PendingProjectList/PendingProjectList'

const OngProjects = ({title}) => {
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <PendingProjectList title="EXPLORAR PROYECTOS"/>
    </main>
  )
}

export default OngProjects