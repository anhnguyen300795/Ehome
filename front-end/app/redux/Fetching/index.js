import { fromJS, Map } from 'immutable'
import { handleActions } from "redux-actions";

import {
  FETCH_HOUSE,
  FETCH_USER
} from './fetching-const.js'

const fetchHouses = (state, { payload }) => {
  return state.set('houses', payload)
}

const fetchUser = (state, { payload }) => {
  return state.set('user', payload)
}


const defaultState = fromJS({
  houses: false,
  user: false
})

export default handleActions({
  FETCH_HOUSE: fetchHouses,
  FETCH_USER: fetchUser
}, defaultState)
