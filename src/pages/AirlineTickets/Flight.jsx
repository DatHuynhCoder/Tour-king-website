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

const Flight = () => {
  const [listTickets,setListTickets] = useState([]);
  //Chứa list vé search được
  const [listTicketsSearch,setListTicketsSearch] = useState([]);

  useEffect(()=> {
    const getTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8800/get-all-ticket-info');
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