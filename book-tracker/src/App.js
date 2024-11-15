import React, { useState } from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const deleteBook = (index) => {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  const toggleStatus = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index
          ? { ...book, status: book.status === 'Currently Reading' ? 'Read' : 'Currently Reading' }
          : book
      )
    );
  };

  return (
    <div>
      <Header />
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDelete={deleteBook} onToggleStatus={toggleStatus} />
      <Footer />
    </div>
  );
};

export default App;
