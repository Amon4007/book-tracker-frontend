import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Currently Reading');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author, status });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Read">Read</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
