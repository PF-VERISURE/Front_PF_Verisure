import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Rutas from '../components/pages/Rutas'
import VolonteerExplore from '../components/pages/volonteer/VolonteerExplore/VolonteerExplore'
import VolonteerDashboard from '../components/pages/volonteer/VolonteerDashboard'
import VolonteerProject from '../components/pages/volonteer/VolonteerProject/VolonteerProject'
import VolonteerCertificates from '../components/pages/volonteer/VolonteerCertificates'
import OngNewProject from '../components/pages/ong/OngNewProject'
import OngDashboard from '../components/pages/ong/OngDashboard'
import AdminDashboard from '../components/pages/Admin/AdminDashboard'
import AdminMetrics from '../components/pages/admin/AdminMetrics/AdminMetrics'
import AdminProject from '../components/pages/admin/AdminProject/AdminProject'
import AdminVolonteerProfile from '../components/pages/admin/AdminVolonteerProfile'
import Layout from '../layout/layout';
import AdminOngProfiles from '../components/pages/admin/AdminONGProfiles';
import Login from '../components/pages/Login/Login';
import AdminPage from "../components/pages/admin/AdminPage/AdminPage";
import OngProjects from '../components/pages/ong/OngProject/OngProjects';
import AuthLayout from '../layout/AuthLayout';
import PublishedProjectsList from '../components/organisms/PublishedProjectsList/PublishedProjectsList';


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
        Component: Rutas,
      },

      {
        path: "admin",
        Component: AdminDashboard,
        children: [
          { index: true, Component: AdminPage },
          { path: "metricas", Component: AdminMetrics },
          { path: "proyectos", Component: AdminProject },
          { path: "ongs/perfiles", Component: AdminOngProfiles },
          { path: "voluntario/perfiles", Component: AdminVolonteerProfile }
        ]
      },

      {
        path:"voluntario",
        Component: VolonteerDashboard,
        children:[
          { index: true, path: "proyectos", Component: VolonteerExplore },
          { path: "mis_proyectos", Component: VolonteerProject },
          { path: "certificados", Component: VolonteerCertificates }
        ]
      },

      {
        path: "ongs",
        Component: OngDashboard,
        children:[
          { index: true, Component: OngNewProject },
          { path: "proyectos", Component: OngProjects },
          { path: "nuevo_proyecto", Component: OngNewProject }
        ]
      },
    ]
  }
]);