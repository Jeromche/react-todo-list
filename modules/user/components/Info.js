import React, { Component } from 'react'

export default class Info extends Component {
  handleNewId() {
    this.props.actions.createNewUserId()
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync()
  }

  render() {
    return (
      <div>
        <div>username: {this.props.user.username}</div>
        <div>id: {this.props.user.id}</div>

        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update Async</button>
      </div>
    )
  }
}
