import React from 'react'
import VerisureName from '../../atoms/VerisureName/VerisureName'
import Logo from '../../atoms/Logo/Logo'
import style from "./LogoAndName.module.css"

const LogoAndName = () => {
  return (
    <div className={style.LogoAndName}>
      <Logo/>
      <VerisureName/>
    </div>
  )
}

export default LogoAndName