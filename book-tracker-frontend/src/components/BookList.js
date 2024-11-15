// src/components/BookList.js
import React from 'react';

const BookList = ({ books, deleteBook, toggleStatus }) => {
  return (
    <div>
      <h2>Your Book List</h2>
      {books.length === 0 ? (
        <p>No books in your list. Start by adding some!</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>Status: {book.status}</p>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
              <button onClick={() => toggleStatus(book.id)}>
                Toggle Status
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
