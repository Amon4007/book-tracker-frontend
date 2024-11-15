import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Currently Reading'); // Default status is "Currently Reading"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddBook({ title, status });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
