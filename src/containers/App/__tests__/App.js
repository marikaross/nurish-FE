import {App, mapStateToProps, mapDispatchToProps} from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../../actions';
import { fetchCheese } from '../../../thunks/fetchFormula';

jest.mock('../../../thunks/fetchFormula');

describe('App', () => {
  let wrapper
  let mockFormulas
  let mockIsLoading
  let mockHasErrored
  let mockFetchFormula
  let mockAddFormula


  beforeEach(() => {
    mockFormulas = [{title: 'boost'}, { title: 'smoothie'}];
    mockFetchFormula = jest.fn();
    mockAddFormula = jest.fn();
    mockHasErrored = false
    mockIsLoading = true

    wrapper = shallow(<App
      formulas={mockFormulas}
      isLoading={mockIsLoading}
      hasErrored={mockHasErrored}
      fetchFormula={mockFetchFormula}
      addFormula={mockAddFormula}/>)
  })

  it('renders without crashing', () => {
    expect(true).toEqual(true);
  });

  it('should match the snapShot', () => {
      expect(wrapper).toMatchSnapshot()
  });
})