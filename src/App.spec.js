import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { mapDispatchToProps } from './App'
import * as actions from './actions'
describe('App', () => {
  let wrapper
  window.fetch = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should render without error', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    let expectation = actions.fetchPresident()
    let props = mapDispatchToProps(mockDispatch)
    props.fetchPresidents()
    it('should call dispatch with correct params', () => {
      expect(mockDispatch).toHaveBeenCalledWith(expectation)
    })
  })
})
