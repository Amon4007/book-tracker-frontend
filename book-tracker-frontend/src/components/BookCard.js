function BookCard({ book, onDelete }) {
    return (
      <div className="book-card">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Status: {book.status}</p>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    );
  }

  export default BookCard;
