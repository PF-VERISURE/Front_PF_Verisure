import React from 'react'
import style from "./VolonteerExplore.module.css"
import PublishedProjectsList from '../../../organisms/PublishedProjectsList/PublishedProjectsList'

const VolonteerExplore = () => {
  return (
    <main className={style.main}>
      <PublishedProjectsList  title="EXPLORAR PROYECTOS" />
    </main>
  )
}

export default VolonteerExplore