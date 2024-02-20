import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './pages/Menu/Menu.tsx'
import { Errorrr } from './pages/Error/Errorrr.tsx'
import { Cart } from './pages/Cart/Cart.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Menu/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'*',
    element:<Errorrr/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
  <RouterProvider router={router}/>
  

  </React.StrictMode>,
)
