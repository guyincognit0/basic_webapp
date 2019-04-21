import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


import auth from './auth'
import submissions from './submissions'


function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    submissions,
    auth,
  });
}

export default rootReducer
