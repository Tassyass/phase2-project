import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="row d-flex align-items-center mt-4 mb-4">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;