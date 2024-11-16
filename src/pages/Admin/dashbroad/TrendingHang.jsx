import React from "react";
import { BsArrowRight } from "react-icons/bs";

import anh1 from './anh.jpg'

import './TrendingHang.scss'

function TrendingHang () {
    return (
        <>
            <div className = "trending_hang">
                <div className = "trending_info_hang">
                    <div>
                        <h3>Trending Hang</h3>
                        <span>This Weak</span>
                    </div>
                    <div class = "trend_icon">
                        <BsArrowRight/>
                    </div>
                </div>  
                <div className="trend_hang">
                    <img src = {anh1} alt="" />
                    <div className="trend_info">
                        <h4>Hang may bay</h4>
                        <span>so ve duoc ban</span>
                    </div>
                </div>
                <div className="trend_hang">
                    <img src = {anh1} alt="" />
                    <div className="trend_info">
                        <h4>Hang may bay 2</h4>
                        <span>so ve duoc ban 2</span>
                    </div>
                </div>
                <div className="trend_hang">
                    <img src = {anh1} alt="" />
                    <div className="trend_info">
                        <h4>Hang may bay 3</h4>
                        <span>so ve duoc ban 3</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingHang;