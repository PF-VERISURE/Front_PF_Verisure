import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import LogoAndName from '../../molecules/LogoAndName/LogoAndName'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.header}>
      <LogoAndName/>
    </div>
  )
}

export default Header