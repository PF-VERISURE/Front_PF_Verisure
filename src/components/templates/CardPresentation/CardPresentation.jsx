import React from 'react'
import style from "./CardPresentation.module.css"
import ProjectCard from '../../organisms/ProjectCard/ProjectCard'

const CardPresentation = ({title}) => {
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <section className={style.cards}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </section>
    </main>
  )
}

export default CardPresentation