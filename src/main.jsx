import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contacts from './routes/Contacts.jsx'
import ErrorPages from './routes/ErrorPages.jsx'
import ContactDetails from './routes/ContactDetails.jsx'
import { Navigate } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/contacts/:id",
        element: <ContactDetails />
      },
      {
        path: "oldcontact",
        element: <Navigate to= "/contacts" />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
