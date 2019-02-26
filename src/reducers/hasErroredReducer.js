import * as constants from '../constants'

export default (state = false, action) => {
  switch (action.type) {
    case constants.HAS_ERRORED:
      return action.hasErrored
    default:
      return state
  }
}
