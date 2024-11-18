import React, { useState } from "react";

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Currently Reading");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      alert("Please fill out all fields.");
      return;
    }
    const newBook = { title, author, status };
    onAddBook(newBook);
    setTitle("");
    setAuthor("");
    setStatus("Currently Reading");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
