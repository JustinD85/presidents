import presidents from './presidentsReducer'
import { combineReducers } from 'redux'

export default () =>
  combineReducers({
    presidents,
  })
