const ADD_TODO = 'todo/todo/ADD_TODO'
const COMPLETE_TODO = 'todo/todo/COMPLETE_TODO'
const DELETE_TODO = 'todo/todo/DELETE_TODO'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text: text
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id: id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id: id
})

export default function reducer(todos = [], action) {
  switch (action.type) {
    case ADD_TODO:
      let todo = {
        text: action.text,
        completed: false,
        id: todos.length + 1
      }
      return [todo, ...todos]

    case COMPLETE_TODO:
      return todos.map((todo) => {
        return todo.id !== action.id ? todo : {
          ...todo,
          completed: !todo.completed
        }
      })

    case DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.id
      })

    default:
      return todos;
  }
}
