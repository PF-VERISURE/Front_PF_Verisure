import React from 'react'
import style from "./CardPresentation.module.css"
import ProjectList from '../../organisms/ProjectList/ProjectList'

const CardPresentation = ({title}) => {
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <ProjectList/>
    </main>
  )
}

export default CardPresentation