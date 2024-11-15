// src/components/BookForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Currently Reading'); // Default status
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(), // Create a simple unique ID using the current time
      title,
      author,
      status, // Add status to the new book object
    };
    addBook(newBook);
    navigate('/'); // Navigate back to the book list after adding a book
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Read">Read</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
