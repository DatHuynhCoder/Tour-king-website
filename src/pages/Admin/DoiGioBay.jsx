import React from 'react';

import { Image } from 'react-bootstrap';

import searchIcon from './Search.svg'

import './DoiGioBay.scss'

const data = [
    {
        ID: '1',
        ten: 'Nguyen van a',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
        ten: 'Nguyen van a',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
        ten: 'Nguyen van a',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    }
]

const NguoiDung = () => {
    return (
        <>
        <div>
            <h1>Đổi giờ bay</h1>
            <br/>

            <div className = "custome-search-DoiGioBay">
               <input type = "text" className = "search-DoiGioBay" placeholder="Search here" />
               <button className = "button-Search-DoiGioBay">
                    <Image
                        src={searchIcon}
                        alt="search icon"
                        width={48}
                        height={48}
                        classNameName="icon"
                    />
                </button>
            </div>

            <div className = "custome-select-DoiGioBay">
                <label for="select-DoiGioBay-LoaiND">LoaiND: &nbsp;</label>
                <select className="select-LoaiND" name="select-LoaiND">
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                </select>

                <label for="select-DoiGioBay-isBan">isBan: &nbsp;</label>
                <select className="select-DoiGioBay-isDuyet" name="select-NguoiDung-isDuyet">
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    
                </select>

            </div>

            <br/>
            <table className = "bang-DoiGioBay">
                <tr className = "tr-DoiGioBay">
                    <th className = "th-DoiGioBay">ID chuyến bay</th>
                    <th className = "th-DoiGioBay">Tên người dùng</th>
                    <th className = "th-DoiGioBay">Email</th>
                    <th className = "th-DoiGioBay">SDT</th>
                    <th className = "th-DoiGioBay">Loại người dùng</th>
                    <th className = "th-DoiGioBay">Thao tác</th>
                </tr>
                {data.map((d) => {
                    return (
                        <tr className = "tr-DoiGioBay">
                            <td className = "td-DoiGioBay-id">{d.ID}</td>
                            <td className = "td-DoiGioBay">{d.ten}</td>
                            <td className = "td-DoiGioBay">{d.email}</td>
                            <td className = "td-DoiGioBay">{d.sdt}</td>
                            <td className = "td-DoiGioBay">{d.loaiND}</td>
                            <td className = "td-DoiGioBay">
                                <label>Duyệt</label>
                                <input type="checkbox" className = "duyetDoiGioBay" name="duyetDoiGioBay" value="dachon"/>
                            </td>
                        </tr>
                    )  
                })}
            </table>
        </div>
            
        </>
    )
}
    
export default NguoiDung;