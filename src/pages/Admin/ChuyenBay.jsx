import React from 'react';

import { Image } from 'react-bootstrap';

import searchIcon from './Search.svg'

import './ChuyenBay.scss';

const data = [
    {
        ID: '1',
        hang: 'lau dai cua t1',
        sohieuMayBay: 't1 5s',
        diemxp: 'HN',
        diemd: 'HCM',
        ngayCatCanh: '20/20/2020',
        gioCatCanh: '3:30',
        gioDenDuKien: '5:30',
        isSoldOut: '10/100'
    },
    {
        ID: '1',
        hang: 'lau dai cua t1',
        sohieuMayBay: 't1 5s',
        diemxp: 'HN',
        diemd: 'HCM',
        ngayCatCanh: '20/20/2020',
        gioCatCanh: '3:30',
        gioDenDuKien: '5:30',
        isSoldOut: 'het cmnr'
    },
    {
        ID: '1',
        hang: 'lau dai cua t1',
        sohieuMayBay: 't1 5s',
        diemxp: 'HN',
        diemd: 'HCM',
        ngayCatCanh: '20/20/2020',
        gioCatCanh: '3:30',
        gioDenDuKien: '5:30',
        isSoldOut: 'het cmnr'
    }
    
]

const ChuyenBay = () => {
    return (
        <>
        <div>
            <h1>QUẢN LÝ CHUYẾN BAY</h1>
            <br/>
            <div className = "custome-search-ChuyenBay">
                <input type = "text" className = "search-ChuyenBay" placeholder="Search here" />
                <button className = "button-Search-ChuyenBay">
                    <Image
                        src={searchIcon}
                        alt="chuyen bay icon"
                        width={48}
                        height={48}
                        classNameName="icon"
                    />
                </button>
            </div>
            <br/>
            <div className = "custome-select-ChuyenBay">
                <label for="select-ChuyenBay-Hang"> Hãng: &nbsp;</label>
                <select className="select-Hang" name="select-Hang">
                    <option value="searchsomething">công ty tao làm ra</option>
                    <option value="searchsomething">công ty tao làm ra</option>
                    <option value="searchsomething">công ty tao làm ra</option>
                    <option value="searchsomething">công ty tao làm ra</option>
                </select>

                <label for="select-ChuyenBay-isBan">LoaiND: &nbsp;</label>
                <select className="select-ChuyenBay-isBan" name="select-ChuyenBay-isBan">
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    
                </select>

            </div>
            
            <table className = "bang-ChuyenBay">
                <tr className = "tr-ChuyenBay">
                    <th className = "th-ChuyenBay">ID</th>
                    <th className = "th-ChuyenBay">Hãng bay</th>
                    <th className = "th-ChuyenBay">Số hiệu máy bay</th>
                    <th className = "th-ChuyenBay">Điểm xuất phát </th>
                    <th className = "th-ChuyenBay">Điểm đến </th>
                    <th className = "th-ChuyenBay">Ngày cất cánh</th>
                    <th className = "th-ChuyenBay">Giờ cất cánh</th>
                    <th className = "th-ChuyenBay">Giờ đến dự kiến</th>
                    <th className = "th-ChuyenBay">Bán hết</th>
                    <th className = "th-ChuyenBay">Thao tac</th>
                </tr>
                {data.map((d) => {
                    return (
                        <tr className = "tr-ChuyenBay">
                            <td className = "td-ChuyenBay">{d.ID}</td>
                            <td className = "td-ChuyenBay">{d.hang}</td>
                            <td className = "td-ChuyenBay">{d.sohieuMayBay}</td> 
                            <td className = "td-ChuyenBay">{d.diemxp}</td>
                            <td className = "td-ChuyenBay">{d.diemd}</td>
                            <td className = "td-ChuyenBay">{d.ngayCatCanh}</td>
                            <td className = "td-ChuyenBay">{d.gioCatCanh}</td>
                            <td className = "td-ChuyenBay">{d.gioDenDuKien}</td>
                            <td className = "td-ChuyenBay">{d.isSoldOut}</td>
                            <td className = "td-ChuyenBay">
                                <button className ="Duyet-ChuyenBay">Đăng bán</button>
                            </td>
                        </tr>
                    )  
                })}
            </table>
        </div>
            
        </>
    )
}
    
export default ChuyenBay;