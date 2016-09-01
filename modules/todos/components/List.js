import React, { Component } from 'react'
import Item from './Item'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return <Item key={todo.id} todo={todo} actions={this.props.actions}/>
        })}
      </ul>
    )
  }
}
