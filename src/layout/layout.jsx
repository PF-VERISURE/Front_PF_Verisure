import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import "../index.css";
import UserProvider from '../context/User/UserProvider';

const Layout = () => {
  return (
    <>
          <Header/>
          <Outlet/>
          <Footer/>
    </>
  )
}

export default Layout