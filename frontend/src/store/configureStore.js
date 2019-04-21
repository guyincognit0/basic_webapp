import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'


export const history = createBrowserHistory()
// TODO: dev only - replaces compose below
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(
    rootReducer(history),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )
  return store
}

export default configureStore
