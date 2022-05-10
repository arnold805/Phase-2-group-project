import React from "react";

function Search({cars, setCars}) {
  function handleCarSearch(e){
    const filteredCars=cars.filter(car=>{
      return car.make.includes(e.target.value)
    })
    setCars(filteredCars)

  }
    return (
        <div className="searchbar">
          <label htmlFor="search">Search Cars</label>
          <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={handleCarSearch}
          />
        </div>
    )
}

export default Search;