import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import AllCars from "./AllCars";
import Search from "./Search"
import Navbar from "./Components/Navbar.js"
import NewCars from './Components/NewCars';
import UsedCars from './Components/UsedCars';
import SellCar from './Components/SellCar';
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router, Routes, Route, Links } from "react-router-dom";

function App() {

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);

  function handleCarSearch(e){
    const filteredVeh=cars.filter(car=>{
      return car.model.toLowerCase().includes(e.target.value.toLowerCase())
    || car.make.toLowerCase().includes(e.target.value.toLowerCase())
            
      ;
    })
    setFilteredCars(filteredVeh)
  }
  useEffect(()=>{
    setFilteredCars(cars)
  }, [cars]);

  const URL = ('http://localhost:3000/vehicles')
    useEffect(() => { 
        fetch(URL)
        .then(r => r.json())
        .then(data => setCars(data))         
    }, []);
  
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Routes>
        <Route path={"/allcars"} element={<AllCars cars={filteredCars} />}/>
        <Route path={"/newcars"} element={<NewCars/>}/>
        <Route path={"/usedcars"} element={<UsedCars/>}/>
        <Route path={"/sellcar"} element={<SellCar/>}/>
        <Route path={"/contactus"} element={<ContactUs/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
