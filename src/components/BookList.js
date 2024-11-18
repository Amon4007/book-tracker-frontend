import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p>No books to display!</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} />
        ))
      )}
    </div>
  );
};

export default BookList;
