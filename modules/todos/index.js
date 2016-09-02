import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from './components/Input'
import List from './components/List'
import * as actions from '../../redux/reducers/todos'

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

const mapStateToProps = (state) => ({ todos: state.todos })
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
