import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Calender from './components/Calender'
import Budgeting from './components/Budgeting'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
         path:'/',
        element: <App/>
      },
       {
         path:'calender',
        element: <Calender onClose={function (): void {
          throw new Error('Function not implemented.')
        } }/>
      },
       {
         path:'budgeting',
        element: <Budgeting onClose={function (): void {
          throw new Error('Function not implemented.')
        } }/>
      },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
