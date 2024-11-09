import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import './Dashbroad.scss'
import Dailymetric from './DailyMetric.jsx';
import MusicMetric from './SoLuongVeDat.jsx';
import TrendingTicket from './TrendingTicket.jsx';
import TrendingHang from './TrendingHang.jsx';

const admin_dashboard = () => {
    return (
        <div className = "admin-metrics">
            <Navbar />
            <div className="admin-grid-one">
                <Dailymetric/>
                {/* //<MusicMetric/> */}
            </div>
            <div className="admin-grid-two">
                <TrendingTicket />
                <TrendingHang />
            </div>
        </div>
    )
}
    
export default admin_dashboard;