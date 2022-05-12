import React from 'react'
import './Navbar.css'

function Navbar() {
const handleClick = () => {

}
  return (
    <nav>
      <ul className="list">
          <li className="navigation">
            <a className="navigation" href= "/Home"> Home</a>
          </li>
          <li className="navigation">
            <a className="navigation" href= "/NewCars">New Cars</a>
          </li>
          <li className="navigation">
            <a className="navigation" href= "/UsedCars">Used Cars</a>
          </li>
          <li className="navigation">
            <a className="navigation" href= "/SellCar">Sell My Car</a>
          </li>
          <li className="navigation">
            <a className="navigation" href= "/ContactUs">Contact Us</a>
          </li>
          
      </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}

export default Navbar