import { fromJS, Map } from 'immutable'
import { handleActions } from "redux-actions";

import {
  LOG_IN,
  LOG_OUT
} from './user-const.js'


const logIn = (state, { payload }) => {
  return state.merge(fromJS(payload))
}

const logOut = (state) => {
  return state.clear()
}

const defaultState = Map()

export default handleActions({
  LOG_IN: logIn,
  LOG_OUT: logOut
}, defaultState)
