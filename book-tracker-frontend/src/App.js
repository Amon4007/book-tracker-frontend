import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/add-book" component={BookForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
