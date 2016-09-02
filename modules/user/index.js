import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Info from './components/Info'
import * as actions from '../../redux/reducers/user'

class UserContainer extends Component {
  render() {
    return <Info actions={this.props.actions} user={this.props.user}/>
  }
}

const mapStateToProps = (state) => ({ user: state.user })
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
