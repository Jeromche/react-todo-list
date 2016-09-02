import React, { Component } from 'react'
import Todos from '../todos'
import User from '../user'

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
