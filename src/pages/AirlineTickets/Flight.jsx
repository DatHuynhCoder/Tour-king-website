/**
 * @author Tan Dat
 */

import React from 'react'
import FlightSearchBar from './FlightSearchBar'
import Ticket from './Ticket'
import FlightAchievements from './FlightAchievements'
//scss
import './Flight.scss'

const Flight = () => {
  return (
    <div className='flight-container'>
      <FlightSearchBar />
      <div className="ticket-result-container">
        <h2 className="result-title">Kết quả tìm kiếm chuyến bay</h2>
        <Ticket />
      </div>
      <FlightAchievements />
    </div>
  )
}

export default Flight