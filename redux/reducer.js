function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        text: action.text,
        completed: false,
        id: getId(state)
      }

      return Object.assign({}, state, {
        todos: [todo, ...state.todos]
      })

    default:
      return state
  }
}

export default reducer
