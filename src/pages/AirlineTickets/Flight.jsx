/**
 * @author Tan Dat
 */

import React from 'react'
import FlightSearchBar from './FlightSearchBar'
import FlightAchievements from './FlightAchievements'

const Flight = () => {
  return (
    <div className='flight-container'>
      <FlightSearchBar />
      <FlightAchievements />
    </div>
  )
}

export default Flight