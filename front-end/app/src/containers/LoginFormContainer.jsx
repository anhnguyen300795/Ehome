import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form'

import { login, signUp } from '../../redux/api.js'

export class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Login"
    }
  }

  onSave = (user) => {
    if (this.state.activeTab === "Login") {
      return this.props.logIn(user)
        .then(() => {
          this.props.onClose()
        })
        .catch(err => {
          throw new SubmissionError({ _error: 'Login failed!' })
        })
    }
    return this.props.signUp(user)
      .then(() => {
        this.changeActiveTab('Login')
        alert("Account created successfully!")
      })
      .catch(err => {
        console.log(err);
        throw new SubmissionError({ _error: 'This user is already exist!' })
      })
  }

  changeActiveTab = (activeTab) => {
    if (activeTab !== this.state.activeTab) this.setState({...this.state, activeTab });
  }

  render() {
    const { activeTab } = this.state
    return (
      <div>
        {
          React.cloneElement(this.props.children, { activeTab, onSubmit: this.onSave, changeActiveTab: this.changeActiveTab })
        }
      </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: user => dispatch(login(user)),
    signUp: user => dispatch(signUp(user))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(LoginFormContainer)
