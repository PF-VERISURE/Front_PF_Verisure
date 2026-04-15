import React from 'react'
import VerisureName from '../../atoms/VerisureName/VerisureName'
import Logo from '../../atoms/Logo/Logo'
import style from "./LogoAndName.module.css"

const LogoAndName = () => {
  return (
    <main className={style.LogoAndName}>
      <Logo/>
      <VerisureName/>
    </main>
  )
}

export default LogoAndName