import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './HomePage'
import SubmitPage from './SubmitPage'
import JobsPage from './JobsPage'

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
        <Route exact path="/" component={HomePage} />
        <Route path="/jobs" component={JobsPage} />
        <Route path="/submit" component={SubmitPage} />
      </div>
    </Router>
  );
}

export default App;
