import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
const handleClick = () => {
// add links in href= "/Home
}
  return (
    <nav>
      <ul className="list">
          <li className="navigation">
            <Link className="navigation" to= "/allcars"> All Cars</Link>
          </li>
          <li className="navigation">
            <Link className="navigation" to= "/newcars">New Cars</Link>
          </li>
          <li className="navigation">
            <Link className="navigation" to= "/usedcars">Used Cars</Link>
          </li>
          <li className="navigation">
            <Link className="navigation" to= "/sellcar">Sell My Car</Link>
          </li>
          <li className="navigation">
            <Link className="navigation" to= "/contactus">Contact Us</Link>
          </li>
          
      </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}

export default Navbar