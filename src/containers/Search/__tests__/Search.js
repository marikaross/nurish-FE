import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';


describe('Search', () => {
    let wrapper
    let mockHandleChange
    let mockHandleSubmit
    let mockHandleInput

  beforeEach(() => {
    mockHandleChange = jest.fn()
    mockHandleSubmit = jest.fn()
    mockHandleInput = jest.fn()
    wrapper = shallow(<Search 
      handleChange={mockHandleChange}
      handleSubmit={mockHandleSubmit}
      handleInput={mockHandleInput}  
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})