import "./index.scss"
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li><NavLink className={({ isActive }) => (isActive ? "salam" : "")} to="/"><span>Home</span></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "salam" : "")} to="/contact"><span>Contact</span></NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar