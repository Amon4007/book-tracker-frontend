import axios from "axios";
import BookForm from "../components/BookForm";

function AddBookPage() {
  const handleAddBook = (newBook) => {
    axios.post("http://localhost:3001/books", newBook).then(() => {
      alert("Book added successfully!");
    });
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default AddBookPage;
