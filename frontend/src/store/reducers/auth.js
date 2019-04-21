import { SET_USER,
         UNSET_USER } from '../actions'


function auth(state = {user: '', is_authed: false}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
        is_authed: true,
      };
    case UNSET_USER:
      return {
        user: '',
        is_authed: false,
      };
    default:
      return state;
  }
}

export default auth;
