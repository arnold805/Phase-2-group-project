import React from "react";
import CarCard from "./CarCard"
import Search from "./Search";


function AllCars({cars, handleCarSearch}) {



return (
    <main>
        <Search handleCarSearch={handleCarSearch}/>
        <ul className="cars">
            {cars.map((car) => {
                return <CarCard key={car.id} car={car} />
            }
          )
       }
        </ul>
    </main>
  )
}

export default AllCars