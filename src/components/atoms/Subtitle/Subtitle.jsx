import React from 'react'
import style from "./Subtitle.module.css"

const Subtitle = ({subtitle}) => {
  return (
        <>
        <p className={style.subtitle}>{subtitle}</p>
        </>
  )
}

export default Subtitle