import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from '../Search';
import { addFilterResults } from '../../../actions';
import { fetchResults } from '../../../thunks/fetchResults';
import { formulas as mockFormulas } from '../../../data-helper/mockFormula'

jest.mock('../../../thunks/fetchResults');

describe('Search', () => {
    let wrapper
    let mockInput
    let mockEvent
    let mockHistory
    let mockHandleChange
    let mockHandleSubmit
    let mockHandleInput
    let mockFetchResults

  beforeEach(() => {
    mockInput = 'Gluten Free';
    mockEvent = { preventDefault: jest.fn() };
    mockHistory = [];
    mockHandleChange = jest.fn()
    mockHandleSubmit = jest.fn()
    mockHandleInput = jest.fn()
    mockFetchResults = jest.fn()

    wrapper = shallow(<Search 
      handleChange={mockHandleChange}
      handleSubmit={mockHandleSubmit}
      handleInput={mockHandleInput}  
      fetchResults={mockFetchResults}
      history={mockHistory}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have a default state with a input string', () => {
    const expected = {input: ''};

    const results = wrapper.state();

    expect(results).toEqual(expected);
  });

  it('should have a default state with a input string', () => {
    const expected = {input: ''};

    const results = wrapper.state();

    expect(results).toEqual(expected);
  });

  it('should update the state when handleChange is invoked', () => {
    const expected = 'Gluten Free'

    wrapper.instance().handleInput(mockInput);

    const results = wrapper.state('input');

    expect(results).toEqual(expected);
  });

   it('should invoke the fetchResults thunk when the form is submitted', () => {
    wrapper.instance().handleInput(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    let url = `https://nurish-app.herokuapp.com/api/v1/search?key_word=GlutenFree`;

    expect(mockFetchResults).toHaveBeenCalledWith(url);
  });

   it('should direct the user to the formulas page of the application', () => {
    wrapper.instance().handleInput(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockHistory).toEqual(['/formulas']);
  });

  describe('mapStateToProps', () => {

    let filterResults;
    let isLoading;
    let hasErrored;
    let mockState;

    beforeEach(() => {

      filterResults = mockFormulas
      isLoading = false;
      hasErrored = false;

      mockState = {
        filterResults,
        isLoading,
        hasErrored
      };

    });

    it('should return an object with filterResults, isLoading, and hasErrored property', () => {
      const expected = {
        filterResults: mockFormulas,
        isLoading: false,
        hasErrored: false
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

    });

  });

  describe('mapDispatchToProps', () => {

    let actionToDispatch;
    let mockDispatch;

    beforeEach(() => {

      mockDispatch = jest.fn();

    });

    it('calls dispatch with the fetchDevelopmentIndicators action when called', () => {

      const mappedProps = mapDispatchToProps(mockDispatch);

      actionToDispatch = addFilterResults(mockFormulas);

      mappedProps.addFilterResults(mockFormulas);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });

    it('calls dispatch with the fetchDevelopmentIndicators action when called', () => {
      const mockUrl = `https://nurish-app.herokuapp.com/api/v1/search?key_word=GlutenFree`;

      const mappedProps = mapDispatchToProps(mockDispatch);

      actionToDispatch = fetchResults(mockUrl);

      mappedProps.fetchResults(mockUrl);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });

  });

})