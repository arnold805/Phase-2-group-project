import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import CarContainer from "./CarContainer";
import Search from "./Search"

function App() {

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);

  function handleCarSearch(e){
    const filteredVeh=cars.filter(car=>{
      return car.model.includes(e.target.value);
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
      <Header />
      <Search handleCarSearch={handleCarSearch}/>
      <CarContainer cars={filteredCars} />
    </div>
  );
}

export default App;
