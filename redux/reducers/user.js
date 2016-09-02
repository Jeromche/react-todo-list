const CREATE_USER_ID = 'todo/user/CREATE_USER_ID'

export const createNewUserId = () => ({
  type: CREATE_USER_ID,
  id: Math.round(Math.random() * 100)
})

export const createNewUserIdIfOdd = () => {
  return (dispatch, getState) => {
    const { user } = getState()
    if (user.id % 2 === 0) return
    dispatch(createNewUserId())
  }
}

export const createNewUserIdAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createNewUserId())
    }, 2500)
  }
}

export default function reducer(user = {}, action) {
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
