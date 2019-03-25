import React from 'react';

export default function Display(props) {

  const books = props.books;
  //console.log(books);

  books.map(book => {
    if(book.isEbook) {

    } else {
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

  })

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