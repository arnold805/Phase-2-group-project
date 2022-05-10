import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Header from './Header';
import CarContainer from "./CarContainer";

function App() {

  const [listings, setListings] = useState([])
const URL = ('http://localhost:3000/vehicles')    
    useEffect(() => { 
        fetch(URL)
        .then(r => r.json())
        .then(data => console.log(data))
    })




  return (
    <div className="App">
      <Header/>
      <CarContainer listings={listings} />
    </div>
  );
}

export default App;
