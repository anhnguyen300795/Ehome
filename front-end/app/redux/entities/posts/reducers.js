import { fromJS, Map } from 'immutable'
import { handleActions } from "redux-actions";

import {
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from './post-const.js'

const addAllPosts = (state, { payload }) => {
  return state.clear().merge(fromJS(payload))
}

const addPost = (state, { payload }) => {
  return state.merge(fromJS(payload))
}

const updatePost = (state, { payload }) => {
  return state.mergeDeep(fromJS(payload))
}

const deletePost = (state, { payload }) => {
  console.log(payload);
  return state.delete(payload)
}

const defaultState = Map()

export default handleActions({
  FETCH_POSTS: addAllPosts,
  CREATE_POST: addPost,
  UPDATE_POST: updatePost,
  DELETE_POST: deletePost
}, defaultState)
