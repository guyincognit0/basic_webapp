export const SET_USER = 'SET_USER'
export const UNSET_USER = 'UNSET_USER'

export const SUBMISSIONS_SET = 'SUBMISSIONS_SET'
export const SUBMISSIONS_SORT = 'SUBMISSIONS_SORT'

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function unsetUser(payload) {
  return {
    type: UNSET_USER,
    payload
  }
}

export function submissionsSet(payload) {
  return {
    type: SUBMISSIONS_SET,
    payload
  }
}

export function submissionsSort(payload) {
  return {
    type: SUBMISSIONS_SORT,
    payload
  }
}
