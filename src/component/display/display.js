import React from 'react';

export default function Display(props) {

  const books = props.books;
  //console.log(books);

  if(props.filterByIsEbook === 'true') {
    console.log('i hear you')
    return (
      <div className='display'>
        {books.map(book => {

          if(book.price === 0 && book.isForSale) {
            return (
              <div key={book.id}>

                <h2>{book.title}</h2>
                <span>{book.author[0]}</span>
                <div>{book.price || 'Not for sale'}</div>
                <p>{book.description}</p>
                <img src={book.imageSmall.smallThumbnail} alt={book.title}/>

              </div>
            )
          }
        })}
      </div>
    )
  } 
  else {
    console.log('hello')
    return (
      <div className='display'>
        {books.map(book => {
          
          return (
            <div key={book.id}>

              <h2>{book.title}</h2>
              <span>{book.author[0]}</span>
              <div>{book.price || 'Not for sale'}</div>
              <p>{book.description}</p>
              <img src={book.imageSmall.smallThumbnail} alt={book.title}/>

            </div>
          )
        })}
      </div>
    )
  }
}