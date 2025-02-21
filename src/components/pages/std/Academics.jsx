import React from 'react'
import Nav from "../../nav/Nav.jsx"
import "../../styles/aca.css"  // Make sure to create this CSS file for styling
export default function Academics() {
  return (
    <div className="dashboard">
      {/* Navigation bar */}
      <Nav />
      
      <div className="dashboard-content">
        {/* Left sidebar */}
        <div className="sidebar">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        {/* Main content area */}
        <div className="main-content">
          <h1>Welcome to the Academics </h1>
          <p>Here you can view and manage your academic activities.</p>
          {/* You can add more content sections here */}
        </div>
      </div>
    </div>
  )
}
