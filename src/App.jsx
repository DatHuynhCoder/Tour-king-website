
import React from "react"
import './App.scss'
import Header from './components/Header/Header.jsx'

import { 
  Outlet 
} from 'react-router-dom'

const App = () => {
  return (
    <div className="App-container">
      <div className="Header-container">
        <Header/>
      </div>
      <div className="Main-content">
        <Outlet/>
      </div> 
    </div>
  );
}

export default App
