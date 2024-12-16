import React from 'react'

import { Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import { FaUser, FaHome } from "react-icons/fa";
import { MdFlight, MdTimer  } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";


import './Admin.scss'


export default function Admin() {

    return (
      <>
        
        <div className = "tong-admin">
          
          <nav  className ="mucluc-admin">
            <Link to={'/home'} className = "custome-admin-link">
              <button button type="button" className = "nutdangky">Home</button>
            </Link>
            {/* nut home */}
            <ul>
              <li>
                <Link to={'/admin/dashbroad'} className = "custome-admin-link">
                  <FaHome size={26}/> &nbsp;
                  <span>Home</span>
                </Link>
              </li>
              {/* nut nguoi dung */}
              <li>
                <Link to={'/admin/nguoidung'} className = "custome-admin-link">
                  <FaUser size={26}/> &nbsp;
                  <span>Người dùng</span>
                </Link>
              </li>

              <li>
                <Link to={'/admin/chuyenbay'} className = "custome-admin-link">
                  <MdFlight size={26}/> &nbsp;
                  <span>Chuyến bay</span>
                </Link>
              </li>
              
              <li>
                <Link to={'/admin/doigiobay'} className = "custome-admin-link">
                  <MdTimer size={26}/> &nbsp;
                  <span>Đổi giờ bay</span>
                </Link>
              </li>
              <li>
                <Link to={'/admin/hoanve'} className = "custome-admin-link">
                  <IoTicketSharp size={26}/> &nbsp;
                  <span>Hoàn vé</span>
                </Link>
              </li>
            </ul>
          </nav>
          <main className = "hienthi">
            <div>
              <Outlet/>
            </div>
          </main>
          </div>
      </>
    )
  }