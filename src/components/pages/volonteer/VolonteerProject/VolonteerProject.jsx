import React from 'react'
import style from "./VolonteerProject.module.css"
import MyApplications from '../../../organisms/MyApplications/MyApplications'

const VolonteerProject = () => {
  return (
    <main className={style.main}>
      <MyApplications title="MIS PROYECTOS" />
    </main>
  )
}

export default VolonteerProject