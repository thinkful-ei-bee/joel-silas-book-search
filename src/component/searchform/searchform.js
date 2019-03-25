import React, { Component } from 'react';

export default function SearchForm(props) {

  return (
    <div className="search-form">
      <form onSubmit={props.handleSubmit()}>
        <label>Name: </label>
        <input type='text' value={props.searchTerm} />
      </form>
    </div>
  )
}


  
