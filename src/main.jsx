import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router/router"
import UserProvider from './context/User/UserProvider' // 👈 add this
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> 
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)