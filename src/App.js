import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (newBook) => {
    try {
      const response = await axios.post("http://localhost:3001/books", newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <AddBookForm onAddBook={addBook} />
      <BookList books={books} onDeleteBook={deleteBook} />
      <Footer />
    </div>
  );
};

export default App;
