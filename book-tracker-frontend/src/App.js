// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [books, setBooks] = useState([]);

  // Add a new book
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Toggle the status of a book
  const toggleStatus = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === 'Currently Reading' ? 'Read' : 'Currently Reading' }
          : book
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} deleteBook={deleteBook} toggleStatus={toggleStatus} />}
        />
        <Route path="/add-book" element={<BookForm addBook={addBook} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
