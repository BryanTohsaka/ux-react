import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TwilightVodka from './work/TwilightVodka.jsx'
import GreenGetaways from './work/GreenGetaways.jsx'
import TacticalEncounter from './work/TacticalEncounter.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/twilight-vodka",
    element: <TwilightVodka />
  },
  {
    path: "/green-getaways",
    element: <GreenGetaways />
  },
  {
    path: "/tactical-encounter",
    element: <TacticalEncounter />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
