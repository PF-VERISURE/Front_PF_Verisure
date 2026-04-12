import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from '../components/pages/Login'
import AdminONGPerfiles from '../components/pages/admin/AdminONGPerfiles'
import VolontarioExplore from '../components/pages/volontario/VolontarioExplore'
import VolontarioProyectos from '../components/pages/volontario/VolontarioProyectos'
import VolontarioCertificados from '../components/pages/volontario/VolontarioCertificados'
import OngProyectos from '../components/pages/ong/OngProyectos'
import AdminDashboard from '../components/pages/Admin/AdminDashboard'
import AdminMetricas from '../components/pages/Admin/AdminMetricas'
import AdminProyectos from '../components/pages/Admin/AdminProyectos'
import AdminVolontarioPerfiles from '../components/pages/Admin/AdminVolontarioPerfiles'
import OngNuevoProyecto from '../components/pages/ong/OngNuevoProyecto'
import Layout from '../layout/layout';


export const router = createBrowserRouter ([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Login
      },
      {
        path: "admin",
        Component: AdminDashboard,
        children:[
          {
            path: "metricas",
            Component: AdminMetricas
          },
          {
            path: "proyectos",
            Component: AdminProyectos
          },
          {
            path: "ong/perfiles",
            Component: AdminONGPerfiles
          },
          {
            path: "volontario/perfiles",
            Component: AdminVolontarioPerfiles
          }
        ]
      },
      {
        path:"volontario",
        Component: VolontarioExplore,
        children:[
          {
            path: "proyectos",
            Component: VolontarioProyectos
          },
          {
            path: "certificados",
            Component: VolontarioCertificados
          }
        ]
      },
      {
        path: "ong",
        Component: OngProyectos,
        children:[
          {
            path: "nuevo_proyecto",
            Component: OngNuevoProyecto
          }
      ]
      },
    ]
  }
])