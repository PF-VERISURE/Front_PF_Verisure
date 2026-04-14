import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import LogoAndName from '../../molecules/LogoAndName/LogoAndName'
import style from "./Header.module.css"
import User from '../../molecules/User/User'

const Header = () => {
  return (
    <main className={style.header}>
      <LogoAndName/>
      <User className={style.user}/>
    </main>
  )
}

export default Header