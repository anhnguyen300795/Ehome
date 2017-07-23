import { createActions } from 'redux-actions'
import {
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from './post-const.js'



export default createActions(
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
)
