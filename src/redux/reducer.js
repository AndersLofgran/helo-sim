const initialState = {
  id: '',
  username: '',
  profile_pic: '',
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export function showUserProfile(username, profile_pic) {
  return {
    type: UPDATE_USER_INFO,
    payload: {username, profile_pic}
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_INFO:
      return {...state, username: action.payload.username, profile_pic: action.payload.profile_pic}
    default:
    return state
  }
}