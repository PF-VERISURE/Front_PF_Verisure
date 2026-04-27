import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import VolonteerExplore from '../components/pages/volonteer/VolonteerExplore/VolonteerExplore'
import VolonteerDashboard from '../components/pages/volonteer/VolonteerDashboard'
import VolonteerProject from '../components/pages/volonteer/VolonteerProject/VolonteerProject'
import VolonteerCertificates from '../components/pages/volonteer/VolonteerCertificate/VolonteerCertificates'
import OngNewProject from '../components/pages/ong/OngNewProject'
import OngDashboard from '../components/pages/ong/OngDashboard'
import AdminMetrics from '../components/pages/admin/AdminMetrics/AdminMetrics'
import AdminProject from '../components/pages/admin/AdminProject/AdminProject'
import AdminVolonteerProfile from '../components/pages/admin/AdminVolunteerProfile/AdminVolonteerProfile'
import Layout from '../layout/layout';
import AdminOngProfiles from '../components/pages/admin/AdminOngProfiles/AdminOngProfiles';
import Login from '../components/pages/Login/Login';
import OngProjects from '../components/pages/ong/OngProject/OngProjects';
import AuthLayout from '../layout/AuthLayout';
import AdminDashboard from '../components/pages/admin/AdminDashboard';
import routeManager from "../utils/routeManager";
import CertificatePage from '../components/pages/volonteer/CertificatePage/CertificatePage';


export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        Component: Login
      }
    ]
  },

  {
    path: "/",
    Component: Layout,
    children: [
      {
      index: true,
      Component: routeManager
      },
      {
      path: "admin",
      Component: AdminDashboard,
      children: [
        { index: true, Component: AdminProject }, 
        { path: "proyectos", Component: AdminProject },
        { path: "metricas", Component: AdminMetrics },
        { path: "ongs/perfiles", Component: AdminOngProfiles },
        { path: "voluntario/perfiles", Component: AdminVolonteerProfile }
      ]
      },
      {
          path:"voluntario",
          Component: VolonteerDashboard,
          children:[
            { index: true, Component: VolonteerExplore }, 
            { path: "proyectos", Component: VolonteerExplore },
            { path: "mis_proyectos", Component: VolonteerProject },
            { path: "certificados", Component: VolonteerCertificates },
            { path: "certificados/:id", Component: CertificatePage }
          ]
        },
      {
        path: "ongs",
        Component: OngDashboard,
        children:[
          { index: true, Component: OngProjects },
          { path: "proyectos", Component: OngProjects },
          { path: "nuevo_proyecto", Component: OngNewProject }
        ]
      },
    ]
  }
]);