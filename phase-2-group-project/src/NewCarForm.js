import React, {useState} from "react";

function NewCarForm({addCar}) {
  const [type, setType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleCarForm = (e) =>{
    e.preventDefault();

    fetch('http://localhost:3000/vehicles',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        type,
        make,
        model,
        condition,
        price,
        image
        //favorited,
      }),
    }).then(resp=>resp.json())
      .then(car =>{
        
        addCar(car); 


  });
}
    return (
        <div className="ui segment">
          <form id='form' className="ui form" onSubmit={handleCarForm} >
            <div className="inline fields" >
              <input type="text" name="type" placeholder="Type"value={type} onChange={(e)=>setType(e.target.value)}/>
              <input type="text" name="make" placeholder="Make" value={make} onChange={(e)=>setMake(e.target.value)} />
              <input type="text" name="model" placeholder="Model" value={model} onChange={(e)=>setModel(e.target.value)}/>
              <input type="text" name="condition" placeholder="Condition"value={condition} onChange={(e)=>setCondition(e.target.value)} />
              <input type="number" name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} step="1000"/>
              <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=>setImage(e.target.src)} />
            </div>
            <button className="ui button" type="submit">
              List Your Vehicle
            </button>
          </form>
        </div>
      );
    }

export default NewCarForm;