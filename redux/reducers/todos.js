const ADD_TODO = 'todo/todo/ADD_TODO'
const COMPLETE_TODO = 'todo/todo/COMPLETE_TODO'
const DELETE_TODO = 'todo/todo/DELETE_TODO'

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

let lastId = 0;

const single = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false,
        id: lastId++
      }

    case COMPLETE_TODO:
      return { ...state, completed: !state.completed }

    default:
      return state
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [single(undefined, action), ...state]

    case COMPLETE_TODO:
      return state.map(todo => todo.id === state.id ? single(todo, action) : todo)

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    default:
      return state;
  }
}
