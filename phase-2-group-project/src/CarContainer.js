import React from "react";
import CarCard from "./CarCard"

function CarContainer({cars}) {



return (
    <main>
        <ul className="cars">
        
       {cars.map((car) => {
           return <CarCard key={car.id} car={car} />

       })}
        </ul>
    </main>
)
}

export default CarContainer