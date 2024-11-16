import React from 'react'

import { Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import NguoiDungIcon from "./NguoiDung.svg";
import ChuyenBayIcon from "./AirPlaneTicket.svg";
import DoiGioBayIcon from "./Time.svg";
import HomeIcon from "./Home.svg";

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
                  <Image
                    src={HomeIcon}
                    alt="dashboard icon"
                    width={48}
                    height={48}
                    className="admin-icon"
                  />
                  <span>Home</span>
                </Link>
              </li>
              {/* nut nguoi dung */}
              <li>
                <Link to={'/admin/nguoidung'} className = "custome-admin-link">
                  <Image
                    src={NguoiDungIcon}
                    alt="nguoi dung icon"
                    width={48}
                    height={48}
                    className="admin-icon"
                  />
                  <span>Người dùng</span>
                </Link>
              </li>

              <li>
                <Link to={'/admin/chuyenbay'} className = "custome-admin-link">
                  <Image
                    src={ChuyenBayIcon}
                    alt="chuyen bay icon"
                    width={48}
                    height={48}
                    className="admin-icon"
                  />
                  <span>Chuyến bay</span>
                </Link>
              </li>
              
              <li>
              <Link to={'/admin/doigiobay'} className = "custome-admin-link">
                  <Image
                    src={DoiGioBayIcon}
                    alt="doi gio bay icon"
                    width={48}
                    height={48}
                    className="admin-icon"
                  />
                  <span>Đổi giờ bay</span>
                </Link>
              </li>
            </ul>
          </nav>
          <main className = "hienthi">
            <div>
              <Outlet/>
            </div>
            
            {/* <div className = "admin-container">
              <h2>Hello World</h2>
              <p>đây là cái gì đó</p>
            </div>
            <div className = "admin-container">
              <h2>Example Heading</h2>
              <p>day la cai gi do 2</p>
            </div> */}
          </main>
          </div>
      </>
    )
  }