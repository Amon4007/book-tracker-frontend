import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const API_URL = "http://localhost:3001/books";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setBooks(response.data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Book Tracker</h1>
      <Link to="/add-book">Add a Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, status };
    axios.post(API_URL, newBook)
      .then(() => {
        alert("Book added!");
        setTitle("");
        setAuthor("");
        setStatus("");
      })
      .catch(error => console.error("Error adding book:", error));
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <Link to="/">Back to Home</Link>
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
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Read">Read</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;
