function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
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

    case 'COMPLETE_TODO':
      let todos = state.todos.map((todo) => {
        return todo.id !== action.id ? todo :
          Object.assign({}, todo, { completed: !todo.completed })
      })

      return Object.assign({}, state, {
        todos: todos
      })

    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })

    default:
      return state;
  }
}

export default reducer
