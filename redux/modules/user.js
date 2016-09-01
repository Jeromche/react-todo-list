const CREATE_USER_ID = 'todo/user/CREATE_USER_ID'

export function createNewUserId() {
  return {
    type: CREATE_USER_ID,
    id: Math.round(Math.random() * 100)
  }
}

export function createNewUserIdIfOdd() {
  return (dispatch, getState) => {
    const { user } = getState()

    if (user.id % 2 === 0) {
      return
    }

    dispatch(createNewUserId())
  }
}

export function createNewUserIdAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createNewUserId())
    }, 2500)
  }
}

const initialState = {}

export default function reducer(user = initialState, action) {
  switch (action.type) {
    case CREATE_USER_ID:
      return {
        username: user.username,
        id: action.id
      }

    default:
      return user;
  }
}
