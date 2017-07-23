import { createActions } from 'redux-actions'
import {
  LOG_IN,
  LOG_OUT
} from './user-const.js'

export default createActions(
  LOG_IN,
  LOG_OUT
)
