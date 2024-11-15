import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const updateBookStatus = (index, newStatus) => {
    const updatedBooks = [...books];
    updatedBooks[index].status = newStatus;
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Book Tracker</h1>
      <BookForm onAddBook={addBook} />
      <BookList
        books={books}
        onDeleteBook={deleteBook}
        onUpdateStatus={updateBookStatus}
      />
    </div>
  );
}

export default App;
