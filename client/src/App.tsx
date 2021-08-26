import * as React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import TodoList from './views/TodoList';

function App() {
  return (
    <Router>
      <header>
        <div className="logo">Memorize</div> 
      </header>
      <main>
        <Switch>
          <Route path="/"><TodoList/></Route>
        </Switch>
      </main>
      <footer>
        <div className="footer-text">All rights reserved.</div>
      </footer>
    </Router>
  );
}

export default App;
