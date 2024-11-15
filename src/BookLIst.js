import React from 'react';

function BookList({ books, onDeleteBook, onUpdateStatus }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <h3>{book.title} by {book.author}</h3>
          <p>Status: {book.status}</p>
          <button onClick={() => onDeleteBook(index)}>Delete</button>
          <button onClick={() => onUpdateStatus(index, 'Read')}>Mark as Read</button>
          <button onClick={() => onUpdateStatus(index, 'Currently Reading')}>Mark as Currently Reading</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
