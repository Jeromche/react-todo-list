import React, { Component } from 'react'
import Todos from '../modules/todos/container'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Todos/>
      </div>
    )
  }
}
