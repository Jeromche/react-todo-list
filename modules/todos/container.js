import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from './components/Input'
import List from './components/List'
import * as actions from '../../redux/modules/todos'

class TodosContainer extends Component {
  render() {
    return (
      <div>
        <Input addTodo={this.props.actions.addTodo}/>
        <List actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }
}

/**
 * @todo Only pass on the todos.
 */
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
