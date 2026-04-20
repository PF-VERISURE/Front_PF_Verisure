import React from 'react'
import style from "./Title.module.css"

const Title = ({title}) => {
  return (
    <main>
        <h1 className={style.title}>{title}</h1>
    </main>
  )
}

export default Title