import React from "react";

function CarCard({ car }) {
  return (
    // <Card>
    <div>
      <div className="car" >
        <div className="car-body" >
          <h3 className="car-name">
            {car.make} {car.model}
          </h3>
          <img src={car.image} alt={car.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}}/>
          <h5 className="car-condition">{car.condition}</h5>
          <h5 className="car-price">{car.price}</h5>
        </div>
      </div>
    </div>
    // </Card>
  );
}

export default CarCard;
