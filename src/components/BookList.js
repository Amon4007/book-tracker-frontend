import React from 'react';
import BookItem from './BookItem';

function BookList({ books, onDeleteBook, onUpdateStatus }) {
  return (
    <div>
      <h2>Your Book List</h2>
      <ul>
        {books.map((book, index) => (
          <BookItem
            key={index}
            book={book}
            onDelete={() => onDeleteBook(index)}
            onUpdateStatus={(newStatus) => onUpdateStatus(index, newStatus)}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
