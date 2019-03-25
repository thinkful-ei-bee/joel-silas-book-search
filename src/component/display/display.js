import React from 'react';

export default function Display(props) {

  const books = props.books;
  //console.log(books);

  function buildAuthors(authorsInput) {
    if (authorsInput) 
      return(
        <ul>
          {
            authorsInput.map((value, index) => {
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      )
    return;  
  }

  return (
    <div className='display'>
      {books.map((book, index) => {
        
        return (
          <div key={index}>

            <h2>{book.title}</h2>
            <span>
              {buildAuthors(book.authors)}
              {/* <ul>
                {
                  book.authors.map((value, index) => {
                    return <li key={index}>{value}</li>
                  })
                }
              </ul>               */}
            </span>
            {/* <div>{book.price || 'Not for sale'}</div> */}
            <div>{book.price}</div>
            <p>{book.description}</p>
            <img src={book.imageSmall} alt={book.title}/>
           
          </div>
        )
      })}
    </div>
  )
}