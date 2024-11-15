import React from 'react';

const BookList = ({ books, onDelete, onToggleStatus }) => {
  return (
    <div>
      <h2>Your Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book.title} - {book.status}</span>
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => onToggleStatus(index)}>
              Mark as {book.status === 'Currently Reading' ? 'Read' : 'Currently Reading'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
