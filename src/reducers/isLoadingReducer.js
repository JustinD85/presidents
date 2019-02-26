import * as constants from '../constants'

export default (state = false, action) => {
  switch (action.type) {
    case constants.IS_LOADING:
      return action.isLoading
    default:
      return state
  }
}
