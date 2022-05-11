import React from "react";

function Search({handleCarSearch}) {

  
    return (
        <div className="searchbar">
          <label htmlFor="search">Search Cars</label>
          <input
            type="text"
            id="search"
            placeholder="Type a model to search..."
            onChange={handleCarSearch}
          />
        </div>
    )
}

export default Search;