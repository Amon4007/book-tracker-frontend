import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const onAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="App">
      <h1>Book Tracker</h1>
      <BookForm onAddBook={onAddBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
