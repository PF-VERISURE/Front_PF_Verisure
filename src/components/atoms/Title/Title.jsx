import React from 'react'
import style from "./Title.module.css"

const Title = ({title}) => {
  return (
    <section>
        <h1 className={style.title}>{title}</h1>
    </section>
  )
}

export default Title