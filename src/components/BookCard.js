import React from "react";

const BookCard = ({ book, onDeleteBook }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Status: {book.status}</p>
      <button onClick={() => onDeleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default BookCard;
