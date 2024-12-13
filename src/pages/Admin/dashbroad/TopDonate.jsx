import React from "react";
import { BsArrowRight } from "react-icons/bs";

import anh1 from './anh.jpg'

import './TrendingHang.scss'

function TrendingHang () {
    return (
        <>
            <div className = "TopDonate">
                <div className = "TopDonate_tieude">
                    <div>
                        <h3>Top Donate</h3>
                        <span>This Weak</span>
                    </div>
                    <div class = "TopDonate_icon">
                        <BsArrowRight/>
                    </div>
                </div>  
                <div className="TopDonate_info">
                    <img src = {anh1} alt="" />
                    <div className="TopDonate_ThongTin">
                        <h4>Tên thk donate cho</h4>
                        <span>so ve duoc ban</span>
                    </div>
                </div>
                <div className="TopDonate_info">
                    <img src = {anh1} alt="" />
                    <div className="TopDonate_ThongTin">
                        <h4>Tên thk donate cho 2</h4>
                        <span>so ve duoc ban 2</span>
                    </div>
                </div>
                <div className="TopDonate_info">
                    <img src = {anh1} alt="" />
                    <div className="TopDonate_ThongTin">
                        <h4>Tên thk donate cho 3</h4>
                        <span>so ve duoc ban 3</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingHang;