import React, { Component } from 'react'

const Item = ({ text, onComplete, onDelete }) => (
  <li>
    <div>{text}</div>
    <button onClick={onComplete}>Mark as completed</button>
    <button onClick={onDelete}>Delete todo</button>
  </li>
)

export default Item
