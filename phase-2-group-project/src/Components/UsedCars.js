import React from "react";
import CarCard from "../CarCard";

function UsedCars({filteredCars}) {
    

    const onlyUsedCars = () => {
        const filteredArray = filteredCars.filter(car => {
                 return car.condition =="Used"})
            
        
        
       return filteredArray.map((car => {
          return <CarCard key={car.id} car={car} />
       }))}

    return (
        <div className="UsedCars" >
            {onlyUsedCars()}
           
        </div>
    )
}

export default UsedCars;