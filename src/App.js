import React, { Component } from 'react';
import './App.css';
import k from './util/accred';
import Header from './component/header/header';
import SearchForm from './component/searchform/searchform';
import Display from './component/display/display';
import Filter from './component/filter/filter';

export default class App extends Component {
  
  // let response = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${k}`;
  // console.log(response);

  // two most common spots for ajax: event handler and componentDidMount()

  state = {
    loading: false,
    response: [],
    books: [],
    error: null,
    currentSearchTerm: '',
    filterByTypeOfBook: '',
    fitlerByIsEbook: false,
  };

  handleSearchSubmit = (event) => {
    const searchTerms = event.target.searchInput.value;
    const url = `${this.props.baseUrl}?q=${searchTerms}&key=${k}`;
    const options = {
      method: 'GET',
    };
    
    this.setState({loading: true, error: null}); 

    fetch(url, options)
      .then(response => response.ok ? response.json() : Promise.reject('Something went wrong'))
      .then(response => {
        this.setState(
          {response: response.items, loading: false}  
        );  
      })
      .catch(error => this.setState({ error: error.message, loading: false}));
  }

  handleFilterIsEbook = () => {
    console.log('filter for ebook');
    let newFilterByEbook = !this.state.fitlerByIsEbook;
    this.setState({ fitlerByIsEbook: newFilterByEbook }); 
  }
  
  handleBooks(bookInput) {
    const books = this.state.response.map(book => {
      const id = book.id;
      const kind = book.kind;
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors;
      let price;
      let isForSale = true;
      if (book.saleInfo.saleability === 'NOT_FOR_SALE') {
        isForSale = false;
      }
      if (book.saleInfo.saleability === 'FOR_SALE') {
        price = book.saleInfo.listPrice.amount;
      } else {
        price = 0;
      }
      const isEbook =  book.saleInfo.isEbook;
      const description = book.volumeInfo.description;
      const imageSmall = book.volumeInfo.imageLinks;
      return { id, kind, title, author, price, isForSale, isEbook, description, imageSmall }
    });

    return books;
  }

  componentDidMount() {
    // console.log(this.state.response)
  }
  
  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>
    } else if (this.state.loading) {
      return<div>loading...</div>
    } 

    // Filter by:
    // type of book
    // whether the book is a free ebook or not
    //
    // optionally allow user to click for further book details
    
    let books = this.handleBooks(this.state.response);
    console.log('handleBooks: ', books);

    return (
      <>
        <Header />
        <main role="main" className="App">
          <SearchForm 
            handleSearchSubmit={this.handleSearchSubmit}
            searchTerm={this.state.currentSearchTerm}
            fitlerByIsEbook={this.state.fitlerByIsEbook}
          />
          <Filter 
            handleFilterIsEbook={this.handleFilterIsEbook}
          />

          <Display 
            fitlerByIsEbook={this.state.fitlerByIsEbook}
            books={books}
          />
          
          {/* display books .. */}
          
        </main>
      </>
    );
  }
}

App.defaultProps = {
  baseUrl: 'https://www.googleapis.com/books/v1/volumes',
}
