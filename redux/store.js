import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todos from './reducers/todos'
import user from './reducers/user'

// @todo Use the new syntax.
let finalCreateStore = compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const rootReducer = combineReducers({ todos, user })

export default function configureStore() {
  return finalCreateStore(rootReducer)
}
