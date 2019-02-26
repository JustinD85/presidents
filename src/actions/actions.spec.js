import * as constants from '../constants'
import * as actions from './'
import mockData from '../mockData'

describe('actions', () => {
  describe('setPresident', () => {
    it('should return the correct action', () => {
      const expectation = {
        type: constants.SET_PRESIDENTS,
        presidents: mockData,
      }
      const result = actions.setPresident(mockData)
      expect(expectation).toEqual(result)
    })
  })

  describe('fetchPresident', () => {
    it('should return the correct action', () => {
      const expectation = {
        type: constants.FETCH_PRESIDENTS,
      }
      const result = actions.fetchPresident()
      expect(expectation).toEqual(result)
    })
  })

  describe('isLoading', () => {
    it('should return the correct action', () => {
      const expectation = {
        type: constants.IS_LOADING,
        isLoading: true
      }
      const result = actions.isLoading(true)
      expect(expectation).toEqual(result)
    })
    it('should return the correct action', () => {
      const expectation = {
        type: constants.IS_LOADING,
        isLoading: false
      }
      const result = actions.isLoading(false)
      expect(expectation).toEqual(result)
    })
  })
  describe('hasErrored', () => {
    it('should return the correct action', () => {
      const expectation = {
        type: constants.HAS_ERRORED,
        hasErrored: true
      }
      const result = actions.hasErrored(true)
      expect(expectation).toEqual(result)
    })
    it('should return the correct action', () => {
      const expectation = {
        type: constants.HAS_ERRORED,
        hasErrored: false
      }
      const result = actions.hasErrored(false)
      expect(expectation).toEqual(result)
    })
  })

})
