import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Info from './components/Info'
import * as actions from '../../redux/modules/user'

class UserContainer extends Component {
  render() {
    return (
      <Info actions={this.props.actions} user={this.props.user}/>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
