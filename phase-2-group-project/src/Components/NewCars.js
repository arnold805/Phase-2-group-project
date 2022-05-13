import React from "react";
import CarCard from "../CarCard";

function NewCars({filteredCars}) {
    

    const onlyNewCars = () => {
        const filteredArray = filteredCars.filter(car => {
                 return car.condition =="New"})
            
        
        
       return filteredArray.map((car => {
          return <CarCard key={car.id} car={car} />
       }))}

    return (
        <div className="NewCars" >
            {onlyNewCars()}
           
        </div>
    )
}

export default NewCars;