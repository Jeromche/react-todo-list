import React, { Component } from 'react'

const Input = ({ addTodo }) => {
  let input

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        addTodo(input.value)
        input.value = ''
      }}>
      <input
        type="text"
        placeholder="Type in your todo"
        ref={node => { input = node }}
      />
      <input type="submit" text="Submit"/>
    </form>
  )
}

export default Input
