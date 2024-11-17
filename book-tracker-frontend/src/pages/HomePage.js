import { useState, useEffect } from "react";
import axios from "axios";
import BookList from "../components/BookList";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`).then(() => {
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    });
  };

  return (
    <div>
      <h1>Your Book List</h1>
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
