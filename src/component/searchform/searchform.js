import React, { Component } from 'react';

export default function SearchForm(props) {

  return (
    <div className="search-form">
      <form onSubmit={() => props.handleSubmit('derp')}>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" type='text' value={props.searchTerm} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}


  
