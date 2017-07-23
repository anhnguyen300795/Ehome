import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import entities from './entities'
import fetching from './Fetching'

export default combineReducers({
  entities,
  form,
  fetching
})
