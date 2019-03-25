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

  function buildImages(inputImages) {
    if (inputImages)
      return(
        <img src={inputImages.imageSmall.smallThumbnail} alt='temp' />
      )
    return;
  }
 
  return (
    <div className='display'>
      {books.map(book => {
        
        return (
          <div key={book.id}>

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
            <div>{book.price || 'Not for sale'}</div>
            <p>{book.description}</p>
            {/* <img src={book.imageSmall.smallThumbnail} alt={book.title}/> */}
            {buildImages(book.imageSmall.smallThumbnail)}
          </div>
        )
      })}
    </div>
  )
}