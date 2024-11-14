// src/components/BookForm.js
import React, { useState } from 'react';
import axios from 'axios';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, year };

    axios.post('http://localhost:4000/books', newBook)
      .then(response => {
        addBook(response.data);
        setTitle('');
        setAuthor('');
        setGenre('');
        setYear('');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add Book</button>
      <form onSubmit={handleSubmit} className="form">
    </form>
  );
}

export default BookForm;
s