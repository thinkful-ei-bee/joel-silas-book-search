import React, { Component } from 'react';

export default function SearchForm(props) {

  return (
    <div className="search-form">
      <form onSubmit={(event) => {
          event.preventDefault()
          props.handleSearchSubmit(event)
        }}>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" type='text'/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}


  
