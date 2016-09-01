import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todosModule from './reducers/todos'
import userModule from './reducers/user'

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
