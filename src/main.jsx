import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Error from './Error/Error.jsx'
import { ToastContainer } from 'react-toastify'
import Blog from './Pages/Blog/Blog.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/my-first-router/',
      Component: App,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: '/my-first-router/blog',
          element: <Blog />
        },
        {
          path:'/my-first-router/*',
          element: <Error></Error>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
