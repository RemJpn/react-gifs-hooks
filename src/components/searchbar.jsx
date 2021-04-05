import React from 'react';
import giphy from 'giphy-api';

const SearchBar = (props) => {
  // const setGifList = props.setGifList;


  const handleChange = (e) => {
    console.log(e.target.value);
    giphy('a3z7TTCExIZeuVSQeAxcg6JZydVy9c8A')
      .search({
        q: e.target.value,
        limit: 10
      })
      .then(res => props.setGifList(res.data));
  };


  return (
    <div>
      <input type="text" className="form-search" onChange={handleChange} />
    </div>

  );
};

export default SearchBar;
