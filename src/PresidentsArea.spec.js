import React from 'react'
import { shallow } from 'enzyme'
import mockData from './mockData'

import { PresidentsArea, mapStateToProps } from './PresidentsArea'
describe('PresidentsArea', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PresidentsArea />)
  })

  it('should render without error', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should show loading screen if no error or data', () => {
    expect(wrapper.find('.loading').length).toEqual(1)
  })

  it('should show error if there is one ', () => {
    wrapper = shallow(<PresidentsArea hasErrored={true} />)
    expect(wrapper.find('.error').length).toEqual(1)
  })

  it('should show presidents if data', () => {
    wrapper = shallow(<PresidentsArea presidents={mockData} />)
    expect(wrapper.find('.presidents').length).toEqual(1)
  })

  describe('mapStateToProps', () => {
    const mockState = {
      stuff: 'not this',
      presidents: mockData,
      isLoading: false,
      hasErrored: false,
    }
    const expectation = {
      presidents: mockData,
      isLoading: false,
      hasErrored: false,
    }
    const props = mapStateToProps(mockState)
    expect(expectation).toEqual(props)
  })
})
