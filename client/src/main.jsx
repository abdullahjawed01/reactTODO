
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} />
))



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
   
 
)
