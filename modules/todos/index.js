import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from './components/Input'
import List from './components/List'
import * as actions from '../../redux/reducers/todos'

class TodosContainer extends Component {
  render = () => (
    <div>
      <Input addTodo={this.props.addTodo}/>
      <List
        todos={this.props.todos}
        onTodoComplete={this.props.completeTodo}
        onTodoDelete={this.props.deleteTodo}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({ todos: state.todos })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
