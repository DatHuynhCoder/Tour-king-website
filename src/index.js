import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import ErrorPage from './pages/HandleRoutesError/error-page.jsx'
import Login from './pages/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import Flight from './pages/AirlineTickets/Flight.jsx'
import OPTCode from './pages/OTP/OTPCode.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Password from './pages/Password/Password.jsx'
import Admin from './pages/Admin/Admin.jsx'
import ChuyenBay from './pages/Admin/ChuyenBay.jsx'
import DoiGioBay from './pages/Admin/DoiGioBay.jsx'
import NguoiDung from './pages/Admin/NguoiDung.jsx'
import Dashbroad from './pages/Admin/dashbroad/Dashbroad.jsx'
import User from './pages/User/UserProfile.jsx'
import BookingHistory from './pages/User/BookingHistory.jsx'
import Refund from './pages/User/Refund.jsx'
import TransactionHistory from './pages/User/TransactionHistory.jsx'
import Payment from './pages/Payment/payment.jsx'
import PaymentStatus from './pages/Payment/OrderStatus.jsx'
import reportWebVitals from './reportWebVitals'
//using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContextProvider } from './context/Context.jsx'

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
        index: true,
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/flight",
        element: <Flight/>
      },
      {
        path: '/otp',
        element: <OPTCode/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/password',
        element: <Password/>
      },
      {
        path: "/User",
        element: <User/>
      },
      {
        path: '/BookingHistory',
        element: <BookingHistory/>
      },
      {
        path: '/TransactionHistory',
        element: <TransactionHistory/>
      },
      {
        path: '/Refund',
        element: <Refund/>
      },
      {
        path: '/payment',
        element: <Payment/>
      },
      {
        path: '/paymentstatus',
        element: <PaymentStatus/>
      },
    
    ],
  }, 
  {
    path: '/admin',
    element: <Admin/>,
    children: [
      {
        path: '/admin/dashbroad',
        element: <Dashbroad/>
      },
      {
        path: '/admin/nguoidung',
        element: <NguoiDung/>
      },
      {
        path: '/admin/ChuyenBay',
        element: <ChuyenBay/>
      },
      {
        path: '/admin/doigiobay',
        element: <DoiGioBay/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
