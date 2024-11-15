import React from 'react';

function BookItem({ book, onDelete, onUpdateStatus }) {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Status: {book.status}</p>
      <button onClick={() => onUpdateStatus(book.status === 'Currently Reading' ? 'Read' : 'Currently Reading')}>
        {book.status === 'Currently Reading' ? 'Mark as Read' : 'Mark as Currently Reading'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default BookItem;
