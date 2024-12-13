import React from 'react';
import { Image } from 'react-bootstrap';

import searchIcon from './Search.svg'

import './NguoiDung.scss';

const data = [
    {
        ID: '1',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
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
            <h1>QUẢN LÝ NGƯỜI DÙNG</h1>
            <br/>
            <div className = "custome-search-NguoiDung">
                <input type = "text" className = "search-NguoiDung" placeholder="Search here" />
                <button className = "button-Search-NguoiDung">
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
            <div className = "custome-select-NguoiDung">
                <label for="select-NguoiDung-LoaiND">LoaiND: &nbsp;</label>
                <select className="select-LoaiND" name="select-LoaiND">
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                    <option value="searchsomething">kiếm con cu gì ở đây</option>
                </select>

                <label for="select-NguoiDung-isBan">isBan: &nbsp;</label>
                <select className="select-NguoiDung-isBan" name="select-NguoiDung-isBan">
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    
                </select>

            </div>
            <table className = "bang-NguoiDung">
                <tr className = "tr-NguoiDung">
                    <th className = "tr-NguoiDung">ID</th>
                    <th className = "tr-NguoiDung">Email</th>
                    <th className = "tr-NguoiDung">SDT</th>
                    <th className = "tr-NguoiDung">Loại người dùng</th>
                    <th className = "tr-NguoiDung">Ban</th>
                    <th className = "tr-NguoiDung">Thao tác</th>
                </tr>
                {data.map((d) => {
                    return (
                        <tr className = "tr-NguoiDung">
                            <td className = "tr-NguoiDung">{d.ID}</td>
                            <td className = "tr-NguoiDung">{d.email}</td>
                            <td className = "tr-NguoiDung">{d.sdt}</td>
                            <td className = "tr-NguoiDung">{d.loaiND}</td>
                            <td className = "tr-NguoiDung">{d.isBan}</td>
                            <td className = "tr-NguoiDung">
                                <button className ="sua-NguoiDung">Update</button>
                                <button className ="Xoa-NguoiDung">Delete</button>
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