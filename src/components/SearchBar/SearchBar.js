import React from 'react';

const SearchBar = props => (
  <div>
    <input className="searchBar" type="text" placeholder="search user" onChange={props.searchFunc}/>
  </div>
);