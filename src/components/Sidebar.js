import React from 'react'
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='listItems'>
      <h2>Survey</h2>
      <ul>
        <li>My Surveys</li>
        <li>Requested Surveys</li>
      </ul>
      <div>
        <p>"Hard work will pay off later laziness <span>-Adam smith</span></p>
      </div>
    </div>
    
  )
}

export default Sidebar
