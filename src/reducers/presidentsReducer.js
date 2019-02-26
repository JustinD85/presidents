import * as constants from '../constants'

export default (state = '', action) => {
  switch (action.type) {
    case constants.SET_PRESIDENTS:
      return action.presidents
    default:
      return state
  }
}
