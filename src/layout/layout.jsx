import React from 'react'
import { Outlet } from "react-router-dom";
import Logo from '../components/atoms/Logo/Logo'
import Header from '../components/organisms/Header';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout