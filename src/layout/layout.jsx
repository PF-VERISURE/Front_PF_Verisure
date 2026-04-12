import React from 'react'
import { Outlet } from "react-router-dom";
import Logo from '../components/atoms/Logo/Logo'

const Layout = () => {
  return (
    <>
      <Logo/>
      <Outlet/>
    </>
  )
}

export default Layout