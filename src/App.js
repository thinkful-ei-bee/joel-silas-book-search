import React, { Component } from 'react';
import './App.css';
import k from './util/accred';
import Header from './component/header/header';
import SearchForm from './component/searchform/searchform';

export default class App extends Component {
  
  // let response = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${k}`;
  // console.log(response);

  // two most common spots for ajax: event handler and componentDidMount()

  state = {
    loading: false,
    response: [],
    error: null,
    currentSearchTerm: '',
  };

  handleSubmit = (event) => {
    const searchTerms = event.target.searchInput.value;
    const url = `${this.props.baseUrl}?q=${searchTerms}&key=${k}`;
    const options = {
      method: 'GET',
    };
    
    this.setState({loading: true, error: null});

    fetch(url, options)
      .then(response => response.ok ? response.json() : Promise.reject('Something went wrong'))
      .then(response => {
        this.setState({response: response.items, loading: false});  
      })
      .catch(error => this.setState({ error: error.message, loading: false}));

  }

  componentDidMount() {
    console.log(this.state.response)
  }
  
  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>
    } else if (this.state.loading) {
      return<div>loading...</div>
    } 

    // map over reponse here ...

    return (
      <>
        <Header />
        <main role="main" className="App">
          <SearchForm 
            handleSubmit={this.handleSubmit}
            searchTerm={this.state.currentSearchTerm}
          />
          {/* {this.state.response[0]} */}
        </main>
      </>
    );
  }
}

App.defaultProps = {
  baseUrl: 'https://www.googleapis.com/books/v1/volumes',
}
