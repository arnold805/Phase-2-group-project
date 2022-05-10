import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import CarContainer from "./CarContainer";
import Search from "./Search"

function App() {

  const [cars, setCars] = useState([]);
  const URL = ('http://localhost:3000/vehicles')
    useEffect(() => { 
        fetch(URL)
        .then(r => r.json())
        .then(data => setCars(data))         
    }, []);




  return (
    <div className="App">
      <Header />
      <Search cars={cars} setCars={setCars}/>
      <CarContainer cars={cars} />
    </div>
  );
}

export default App;
