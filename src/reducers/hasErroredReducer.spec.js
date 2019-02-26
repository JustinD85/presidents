import * as actions from '../actions'
import hasErroredReducer from './hasErroredReducer'

describe('hasErroredReducer', () => {
  it('should return false by default', () => {
    expect(hasErroredReducer(undefined, actions.isLoading(true))).toEqual(false)
  })

  it('should return correct action when given correct type', () => {
    expect(hasErroredReducer(true,actions.hasErrored(false))).toEqual(false)
  })

})
