import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import ErrorPage from './pages/HandleRoutesError/error-page'
import Login from './pages/Login/Login'

import reportWebVitals from './reportWebVitals'
//using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//read this for more information https://reactrouter.com/en/main/start/tutorial
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
