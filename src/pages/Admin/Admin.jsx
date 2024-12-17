import React, { useEffect } from 'react'

import { Image } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { FaUser, FaHome } from "react-icons/fa";
import { MdFlight, MdTimer  } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import './Admin.scss'
import { toast } from 'react-toastify';
import LogoTourKing from "../../assets/tour_king_logo.svg"

export default function Admin() {
  const cookie = new Cookies()
  const navigate = useNavigate()
  useEffect(() => {
    if(!cookie.get("accessToken") || jwtDecode(cookie.get("accessToken")).isadmin === 0) {
      alert('Bạn không có quyền truy cập trang này')
      navigate(-1)
    }
  }, [])
    return (
      <>
        <div className = "tong-admin">
          
          <nav  className ="mucluc-admin">
            <Link to={'/home'} className = "custome-admin-link">
              <Image
                src={LogoTourKing}
                alt="Company logo"
                width={160}
                height={160}
                style={{marginTop: '-60px', marginBottom: '-50px'}}
              />
            </Link>
            {/* nut home */}
            <ul>
              <li>
                <Link to={'/admin/dashbroad'} className = "custome-admin-link">
                  <FaHome size={26}/> &nbsp;
                  <span>Dashboard</span>
                </Link>
              </li>
              {/* nut nguoi dung */}
              <li>
                <Link to={'/admin/nguoidung'} className = "custome-admin-link">
                  <FaUser size={26}/> &nbsp;
                  <span>Người dùng</span>
                </Link>
              </li>

              {/* <li>
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
              </li> */}
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