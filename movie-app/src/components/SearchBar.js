import React, { useState } from 'react';

const SearchBar = (props) => {
 
  return (
    <div className='col col-sm-4'>
        <input className="form-control" 
        value={props.value }
        onChange={() => props.setSearchValue(event.target.value)}
        placeholder="Type to Search ..."></input>
    
    </div>
  );
};

export default SearchBar;