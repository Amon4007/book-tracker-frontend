// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
