import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { fetchPosts, deletePost } from "../../redux/api.js";
import { getAllPosts } from "../../redux/entities/posts/selectors.js";
import { getFetchingByName } from "../../redux/Fetching/selectors.js";
import { getUser } from "../../redux/entities/users/selector.js";

import Post from "../components/Post.jsx";
import LoadingSpinner from '../components/Spiner.jsx'

export const Content = ({ posts, housesIsLoading, deleteHouse, userCanDeletePost }) => {
  if (housesIsLoading) {
    return <LoadingSpinner/>
  }
  return (
    <div className="row">
        {
          posts.map((post) => {
            return userCanDeletePost
                    ? (<Post key={post.id} onDelete={deleteHouse(post.id)} post={post}/>)
                    : (<Post key={post.id} post={post}/>)
          })
        }
      </div>
  );
}

const mapStateToProps = (state) => {
  const user = getUser(state)
  return {
    posts: getAllPosts(state),
    housesIsLoading: getFetchingByName(state, 'houses'),
    userCanDeletePost: user && user.role === "ROLE_ADMIN"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHouse: (id) => () => dispatch(deletePost(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Content))
