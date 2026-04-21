import React from 'react'
import style from "./VolonteerExplore.module.css"
import AllProjectsList from '../../../organisms/AllProjectsList/AllProjectsList'

const VolonteerExplore = () => {
  return (
    <main className={style.main}>
      <AllProjectsList  title="EXPLORAR PROYECTOS" />
    </main>
  )
}

export default VolonteerExplore