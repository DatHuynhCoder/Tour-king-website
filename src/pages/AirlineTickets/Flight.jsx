/**
 * @author Tan Dat
 */

import React, { useEffect, useState } from 'react'
import FlightSearchBar from './FlightSearchBar'
import Ticket from './Ticket'
import FlightAchievements from './FlightAchievements'
//use axios
import axios from 'axios'
//scss
import './Flight.scss'

import { useSearchParams, useLocation } from 'react-router-dom'

const Flight = () => {
  const [listTickets,setListTickets] = useState([]);
  //Chứa list vé search được
  const [listTicketsSearch,setListTicketsSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const hang = searchParams.get('hang')
  const tu = searchParams.get('tu')
  const den = searchParams.get('den')
  const loca_hang = location?.state?.hang ?? null
  const loca_tu = location?.state?.tu ?? null
  const loca_den = location?.state?.den ?? null
  useEffect(()=> {
    if(hang === null || tu === null || den === null) {
      console.log('Bấm vô Đặt vé trên header')  
    }
    else console.log('Bấm vô đặt ngay bên home: ', hang, tu, den)
    console.log('check location: ', loca_hang, loca_tu, loca_den)
    const getTickets = async () => {
      if(loca_hang === null || loca_tu === null || loca_den === null)
        try {
          const response = await axios.get('http://localhost:8800/get-all-flight');
          console.log('check ticket data: ', response.data);
          setListTickets(response.data);
          setListTicketsSearch(response.data);
        }
        catch (error) {
          console.log('Co loi trong qua trinh lay tickets: ', error);
        }
      else
        try {
          const response = await axios.get(`http://localhost:8800/get-all-flight-with-condition?mahang=${loca_hang}&madiemxp=${loca_tu}&madiemden=${loca_den}`);
          console.log('check ticket data: ', response.data);
          setListTickets(response.data);
          setListTicketsSearch(response.data);
        }
        catch (error) {
          console.log('Co loi trong qua trinh lay tickets: ', error);
        }
    };
    getTickets();
    console.log("Check data lise ve: ", listTickets)
  },[])
  return (
    <div className='flight-container'>
      <FlightSearchBar listTickets={listTickets} setList={setListTicketsSearch} />
      <div className="ticket-result-container">
        <h2 className="result-title">Kết quả tìm kiếm vé bay</h2>
        {listTicketsSearch.map((ticket_item, index) => (
          <Ticket key={index} ticket_item={ticket_item}/>
        ))}
      </div>
      <FlightAchievements />
    </div>
  )
}

export default Flight