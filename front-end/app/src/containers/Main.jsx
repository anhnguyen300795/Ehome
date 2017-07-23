import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import classnames from 'classnames'

import userActions from '../../redux/entities/users/actions.js'

import { fetchPosts, login, getCurrentUser, logOut } from "../../redux/api.js";
import { getAllPosts } from "../../redux/entities/posts/selectors.js";
import { getUser } from "../../redux/entities/users/selector.js";

import MenuButton from "../components/MenuButton.jsx"
import Login from "../components/Login.jsx"
import LoginContainer from "../containers/LoginFormContainer.jsx";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShowed: false
    }
  }

  componentDidMount() {
    this.props.getCurrnentUser()
    this.props.fetchPosts(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.fetchPosts(nextProps.location.search)
    }
  }

  toggleLoginModal = () => {
    this.setState({...this.state, loginModalShowed: !this.state.loginModalShowed });
  }

  render() {
    const { loginModalShowed } = this.state
    const { hasUser, logOut: removeUser } = this.props
    const contentClassName = classnames('content', { 'content-opened': loginModalShowed })
    return (
      <div>
          {hasUser 
            ? (<div className="log-out menu">
                <img src="http://i.imgur.com/GMeQoT2.png" alt="" onClick={removeUser}/>
              </div>)
            : <MenuButton handleClick={this.toggleLoginModal} opened={loginModalShowed}/>
          }

          <div className={contentClassName}>
            {this.props.children}
          </div>
          <LoginContainer onClose={this.toggleLoginModal}>
            <Login opened={loginModalShowed}/>
          </LoginContainer>
      </div>
    )
  }
}

Main.displayName = "Main"
const mapStateToProps = (state) => {
  return {
    hasUser: !!getUser(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (queryParams) => dispatch(fetchPosts(queryParams)),
    getCurrnentUser: () => dispatch(getCurrentUser()),
    logOut: () => dispatch(logOut())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Main))
