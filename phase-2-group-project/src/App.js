import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import CarContainer from "./CarContainer";
import Search from "./Search"
import Navbar from "./Components/Navbar.js"

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
      <Search handleCarSearch={handleCarSearch}/>
      <CarContainer cars={filteredCars} />
    </div>


    //   <NavBar />
    //   <Route exact path={"/"}>
    //     <Home />
    //   </Route>
    //   <Route exact path={"/movies"}>
    //     <Movies />
    //   </Route>
    //   <Route exact path={"/directors"}>
    //     <Directors />
    //   </Route>
    //   <Route exact path={"/actors"}>
    //     <Actors />
    //   </Route>

  );
}

export default App;
