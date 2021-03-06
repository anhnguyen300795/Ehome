import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk';

import entities from './entities'
import fetching from './Fetching'

import { promiseDispatchMiddleWare, promiseFlattenerMiddleWare } from './redux-middleware.js'

const rootReducer = combineReducers({
  entities,
  form,
  fetching
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promiseDispatchMiddleWare, promiseFlattenerMiddleWare),
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

export default store
