import React, {useContext, useEffect, useState} from "react";
import './Navbar.scss'
import { ContextStore } from "../../../context/Context";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


function Admin_Navbar() {
  const cookie = new Cookies()
  const [userid, setUserid] = useState(jwtDecode(cookie.get("accessToken")).userid)
  const [admin, setAdmin] = useState({})
  console.log('check userid: ', userid)
  useEffect(() => {
    axios.get(`http://localhost:8800/get-user-by-id?userid=${userid}`).then(res => {
      console.log('check get admin: ', res.data[0])
      setAdmin(res.data[0])
    })
  }, [])
  return(
    <>
      <div className = "admin-navbar">
        <div style={{display: 'flex'}}>
          <img src={admin.Avatar} style={{width: '60px', height: '60px', borderRadius: 25}}>
          </img>
          <div className="admin-name-area">
            <span className="admin-name">{admin.TenDayDu}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin_Navbar;