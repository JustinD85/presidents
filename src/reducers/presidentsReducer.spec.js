import * as actions from '../actions'
import presidentsReducer from './presidentsReducer'
import mockData from '../mockData'

describe('presidentsReducer', () => {
  it('should return \'\' by default', () => {
    expect(presidentsReducer(undefined, actions.isLoading(true))).toEqual('')
  })

  it('should return correct action when given correct type', () => {
    expect(presidentsReducer(undefined,actions.setPresident(mockData))).toEqual(mockData)
  })

})
