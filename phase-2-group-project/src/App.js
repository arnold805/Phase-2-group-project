import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import AllCars from "./AllCars";
import Search from "./Search"
import Navbar from "./Components/Navbar.js"
import NewCars from './Components/NewCars.js';
import UsedCars from './Components/UsedCars.js';
import SellCar from './Components/SellCar.js';
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
      <br></br>
      <Search handleCarSearch={handleCarSearch}/>
      <Header />
      <div className="columns">
      <Routes>
        <Route path={"/allcars"} element={<AllCars handleCarSearch={handleCarSearch} cars={filteredCars} Search={Search} />}/>
        <Route path={"/newcars"} element={<NewCars filteredCars={filteredCars} /> }  />
        <Route path={"/usedcars"} element={<UsedCars filteredCars={filteredCars}/>}/>
        <Route path={"/sellcar"} element={<SellCar/>}/>
      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
