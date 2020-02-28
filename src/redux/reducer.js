const initialState = {
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
  const {type, payload} = action
  switch(type) {
    case SHOW_USER_PROFILE:
      return {...state, username: payload.username, profile_pic: payload.profile_pic}
    default:
    return state
  }
}