import posts from './posts/reducers.js'
import user from './users/reducers.js'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  user
})
