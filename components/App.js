import React, { Component } from 'react'
import Todos from '../modules/todos/container'
import User from '../modules/user/container'

export default class App extends Component {
  render() {
    return (
      <div>
        <User/>
        <Todos/>
      </div>
    )
  }
}
