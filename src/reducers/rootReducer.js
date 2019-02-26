import { combineReducers } from 'redux'
import presidents from './presidentsReducer'
import hasErrored from './hasErroredReducer'
import isLoading from './isLoadingReducer'

export default combineReducers({
  presidents,
  hasErrored,
  isLoading
})
