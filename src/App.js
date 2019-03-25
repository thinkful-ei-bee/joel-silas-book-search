import React, { Component } from 'react';
import './App.css';
import k from './util/accred';
import Header from './component/header/header';

export default class App extends Component {
  
  // let response = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${k}`;
  // console.log(response);

  // two most common spots for ajax: event handler and componentDidMount()

  state = {
    response: []
  };

  handleSubmit() {
    const url = `${this.props.baseUrl}?q=flowers+inauthor:keyes&key=${k}`;
    const options = {
      method: 'GET',
    };
    
    let response = fetch(url, options)
      .then(response => { return response.json(); })
      .then(data => this.setState({response: data}))
  
  }

  componentDidMount() {
    let test = this.handleSubmit();
    // console.log(test);
  }

  render() {
    
    return (
      <>
        <Header />
        <main role="main" className="App">
          Hi!
        </main>
      </>
    );
  }
}

App.defaultProps = {
  baseUrl: 'https://www.googleapis.com/books/v1/volumes',
}
