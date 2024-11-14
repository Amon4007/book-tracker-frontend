// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import axios from 'axios';
import './styles/App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/add" element={<BookForm addBook={addBook} />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
