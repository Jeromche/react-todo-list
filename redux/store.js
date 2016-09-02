import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todosReducer from './reducers/todos'
import userReducer from './reducers/user'

// @todo Use the new syntax.
let finalCreateStore = compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const rootReducer = combineReducers({
  todos: todosReducer,
  user:userReducer
})

export default function configureStore() {
  return finalCreateStore(rootReducer)
}
