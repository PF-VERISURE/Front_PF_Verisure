import React from 'react'
import style from "./DescriptionField.module.css"

const DescriptionField = ({text}) => {
  return (
    <p className={style.text} text={text}>{text}</p>
  )
}

export default DescriptionField