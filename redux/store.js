import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todosModule from './modules/todos'
import userModule from './modules/user'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

const rootReducer = combineReducers({
  todos: todosModule,
  user: userModule
})

const initialState = { todos: [], user: {} };

export default function configureStore(initialState = initialState) {
  return finalCreateStore(rootReducer, initialState)
}
