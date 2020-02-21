const initialState = {
  userId: '',
  username: '',
  profile_pic: '',
}

const SHOW_USER_PROFILE = 'SHOW_USER_PROFILE'

export function showUserProfile(username, profile_pic) {
  return {
    type: SHOW_USER_PROFILE,
    payload: {username, profile_pic}
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_USER_PROFILE:
      return {...state, username: action.payload.username, profile_pic: action.payload.profile_pic}
    default:
    return state
  }
}