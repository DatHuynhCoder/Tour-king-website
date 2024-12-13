import React from "react";
import { BsArrowRight} from "react-icons/bs";
import anh1 from './anh.jpg'

import './TrendingTicket'

function TrendingTicket () {
    return (
        <>
            <div className="trending-ticket">
                <div className="trending-info">
                    <div>
                        <h3>Trending Ticket</h3>
                        <span>This Weak</span>
                    </div>
                    <div className="ticket-icon">
                        <BsArrowRight />
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-info">
                        <img className = "trend-image"src = {anh1}  />
                        <div>
                            <h4>Positions</h4>
                            <span>Arian Grande</span>
                        </div>
                    </div>
                    <div className="trend_meta">
                        <span>14k USD</span>
                        <span>something</span>
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-info">
                        <img className = "trend-image"src = {anh1}  />
                        <div>
                            <h4>thu 2</h4>
                            <span>Arian Grande</span>
                        </div>
                    </div>
                    <div className="trend_meta">
                        <span>14k USD</span>
                        <span>something</span>
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-info">
                        <img className = "trend-image"src = {anh1}  />
                        <div>
                            <h4>thu 3</h4>
                            <span>Arian Grande</span>
                        </div>
                    </div>
                    <div className="trend_meta">
                        <span>14k USD</span>
                        <span>something</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingTicket;