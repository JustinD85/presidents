import * as actions from '../actions'
import isLoadingReducer from './isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return false by default', () => {
    expect(isLoadingReducer(undefined, actions.hasErrored(true))).toEqual(false)
  })

  it('should return correct action when given correct type', () => {
    expect(isLoadingReducer(true,actions.isLoading(false))).toEqual(false)
  })

})
