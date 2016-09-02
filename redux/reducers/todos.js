const ADD_TODO = 'todo/todo/ADD_TODO'
const COMPLETE_TODO = 'todo/todo/COMPLETE_TODO'
const DELETE_TODO = 'todo/todo/DELETE_TODO'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false,
        id: state.length + 1
      }

    case COMPLETE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }

    default:
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [todo(undefined, action), ...state]

    case COMPLETE_TODO:
      return state.map(t => todo(t, action))

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    default:
      return state;
  }
}
