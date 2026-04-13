import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Rutas from '../components/pages/Rutas'
import VolonteerExplore from '../components/pages/volonteer/VolonteerExplore'
import VolonteerProject from '../components/pages/volonteer/VolonteerProject'
import VolonteerCertificates from '../components/pages/volonteer/VolonteerCertificates'
import OngProjects from '../components/pages/ong/OngProject'
import AdminDashboard from '../components/pages/Admin/AdminDashboard'
import AdminMetrics from '../components/pages/admin/AdminMetrics'
import AdminProject from '../components/pages/admin/AdminProject'
import AdminVolonteerProfile from '../components/pages/admin/AdminVolonteerProfile'
import OngNewProject from '../components/pages/ong/OngNewProject'
import Layout from '../layout/layout';
import AdminOngProfiles from '../components/pages/admin/AdminONGProfiles';
import Login  from '../components/pages/Login/Login';


export const router = createBrowserRouter ([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Rutas/>,
      },

      {
            path: "login",
            Component: Login
          },
      {
        path: "admin",
        Component: AdminDashboard,
        children:[
          {
            path: "metricas",
            Component: AdminMetrics
          },
          {
            path: "proyectos",
            Component: AdminProject
          },
          {
            path: "ong/perfiles",
            Component: AdminOngProfiles
          },
          {
            path: "volontario/perfiles",
            Component: AdminVolonteerProfile
          }
          
        ]

      },
      {
        path:"volontario",
        Component: VolonteerExplore,
        children:[
          {
            path: "proyectos",
            Component: VolonteerProject
          },
          {
            path: "certificados",
            Component: VolonteerCertificates
          }
        ]
      },
      {
        path: "ong",
        Component: OngProjects,
        children:[
          {
            path: "nuevo_proyecto",
            Component: OngNewProject
          }
      ]
      },
    ]
  }
])