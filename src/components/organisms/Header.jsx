import React from 'react'
import Logo from '../atoms/Logo/Logo'
import LogoNombre from '../molecules/LogoNombre'

const Header = () => {
  return (
    <div>
      <Logo/>
      <LogoNombre/>
    </div>
  )
}

export default Header