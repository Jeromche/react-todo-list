import React, { Component } from 'react'
import Item from './Item'

const TodoList = ({ todos, onTodoComplete, onTodoDelete }) => (
  <ul>
    {todos.map(todo =>
      <Item
        key={todo.id}
        {...todo}
        onComplete={() => onTodoComplete(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
