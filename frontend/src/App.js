import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import HomePage from './HomePage'
import SubmitPage from './SubmitPage'
import JobsPage from './JobsPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import SignupPage from './SignupPage'

import MenuComponent from './components/MenuComponent'

import rootReducer from './store/reducers'

// TEMP: debugging
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MenuComponent />
        <Container text style={{ marginTop: '7em' }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/submit" component={SubmitPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/signup" component={SignupPage} />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
