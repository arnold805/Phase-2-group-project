import React, {useState} from "react";
import './Sellcar.css'

function SellCar() {
    const [formData, setFormData] = useState({
        type: "",
        make: "",
        model: "",
        condition: "",
        price: "",
        image: "",
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }

      // function checkSellInput(type, make, model, condition, price, image) {
      //   return type === "" && make === "" && model === "" && condition === "" && price === "" && image === ""
      // }

      function handleSubmit(event) {
        // event.preventDefault();
        // checkSellInput();
        fetch("http://localhost:3000/vehicles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: formData.type,
            make: formData.make,
            model: formData.model,
            condition: formData.condition,
            price: formData.price,
            image: formData.image,
          }),
        });
      }

    return (
        <div className="sell-car">
          <h2>Sell Car</h2>
          <form className="sell-car-form" onSubmit={handleSubmit}>
            <input type="text" name="type" placeholder="type" value={formData.type} onChange={handleChange} />
            <input type="text" name="make" placeholder="make" value={formData.make} onChange={handleChange}/>
            <input type="text" name="model"  placeholder="model" value={formData.model} onChange={handleChange}/>
            <input type="text" name="condition"  placeholder="new or used" value={formData.condition} onChange={handleChange}/>
            <input type="number" name="price" placeholder="price" value={formData.price} onChange={handleChange}/>
            <input type="text" name="image"  placeholder="image URL" value={formData.image} onChange={handleChange}/>
            <input type="submit" name="add-car-listing-btn" value="Add Car Listing"/>
          </form>
        </div>
      );
    }

export default SellCar;