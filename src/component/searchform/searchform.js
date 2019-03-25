import React, { Component } from 'react';

export default function SearchForm(props) {

  return (
    <div className="search-form">
      <form onSubmit={(event) => {
          event.preventDefault()
          props.handleSubmit(event)
        }}>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" type='text' value={props.searchTerm} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}


  
