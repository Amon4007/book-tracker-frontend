import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Book Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
