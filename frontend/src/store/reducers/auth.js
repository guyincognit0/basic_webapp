import { SET_USER } from '../actions'


function user(state = 'nouser', action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default user;
