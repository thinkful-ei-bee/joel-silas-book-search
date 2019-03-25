import React, { Component } from 'react';
import './App.css';
import k from './util/accred';
import Header from './component/header/header';
import SearchForm from './component/searchform/searchform';
import Display from './component/Display.js'

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
        this.setState(
          {response: response.items, loading: false}  
        );  
      })
      .catch(error => this.setState({ error: error.message, loading: false}));
  }
  
  handleBooks(bookInput) {
    const books = this.state.response.map(book => {
      const id = book.id;
      const kind = book.kind;
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors;
      const price = () => {
        if (book.saleInfo.saleability === 'FOR_SALE') {
          return book.saleInfo.listPrice.amount;
        } else {
          return 0;
        }
      }
      const isForSale = () => {
        if (book.saleInfo.saleability === 'FOR_SALE') {
          return true;
        } else {
          return false;
        }
      }
      const description = book.volumeInfo.description;
      const imageSmall = book.volumeInfo.imageLinks;
      return { id, kind, title, author, price, isForSale, description, imageSmall }
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

    // map over reponse here ...
    // we need:
    // book id
    // type of book
    // book title
    // author
    // price
    // description
    // image
    // whether the book is a free ebook or not
    //
    // display books in list
    // optionally allow user to click for further book details
    
    
    let books = this.handleBooks(this.state.response);
    console.log('handleBooks: ', books);
    

    return (
      <>
        <Header />
        <main role="main" className="App">
          <SearchForm 
            handleSubmit={this.handleSubmit}
            searchTerm={this.state.currentSearchTerm}
          />
          <Display books={books}/>
          
          {/* display books .. */}
          
        </main>
      </>
    );
  }
}

App.defaultProps = {
  baseUrl: 'https://www.googleapis.com/books/v1/volumes',
}
