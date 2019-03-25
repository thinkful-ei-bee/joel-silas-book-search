import React from 'react';

export default function Display(props) {

  const books = props.books;
  console.log(books);

  return (
    <div className='display'>
      {books.map(book => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <span>{book.author[0]}</span>
            {book.price.listPrice.amount && <div>{book.price.listPrice.amount}</div>}
            <p>book.description</p>
            <img src={book.imageSmall.smallThumbnail} alt={book.title}/>

          </div>
        )
      })}
    </div>
  )
}