import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './HomePage'
import SubmitPage from './SubmitPage'
import JobsPage from './JobsPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import SignupPage from './SignupPage'

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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/signup">SignupPage</Link>
          </li>
        </ul>
        <Route exact path="/" component={HomePage} />
        <Route path="/jobs" component={JobsPage} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/signup" component={SignupPage} />
      </div>
    </Router>
  );
}

export default App;
