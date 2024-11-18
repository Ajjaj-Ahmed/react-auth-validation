import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Root from './components/Root/Root';
import AuthProvider from './provider/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivateRoutes from './components/routes/PrivateRoutes';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    {
      path:'/orders',
      element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
    }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
