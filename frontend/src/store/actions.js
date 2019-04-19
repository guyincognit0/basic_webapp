export const GET_USER = 'GET_USER'
export const SET_USER = 'SET_USER'

export function getUser(payload) {
  return {
    type: GET_USER,
    payload
  }
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  }
}
