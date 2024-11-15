import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    status: 'Currently Reading',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(book);
    setBook({ title: '', author: '', status: 'Currently Reading' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <select
        name="status"
        value={book.status}
        onChange={handleChange}
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Read">Read</option>
        <option value="Want to Read">Want to Read</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
