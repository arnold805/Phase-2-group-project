import React, {useState} from "react";

function NewCarForm() {
    return (
        <div className="ui segment">
          <form id='form' className="ui form" onClick={handleNewTransaction} >
            <div className="inline fields" >
              <input type="type" name="type" value={date} onChange={(e)=>setDate(e.target.value)}/>
              <input type="make" name="make" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
              <input type="model" name="model" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
              <input type="condition" name="condition" placeholder="Amount"value={amount} onChange={(e)=>setAmount(e.target.value)} step="0.01" />
            </div>
            <button className="ui button" type="submit">
              Add Transaction
            </button>
          </form>
        </div>
      );
    }

export default NewCarForm;