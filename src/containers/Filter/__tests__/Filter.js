import {Filter, mapStateToProps, mapDispatchToProps} from '../Filter';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../../actions';
import { fetchResults } from '../../../thunks/fetchResults';

jest.mock('../../../thunks/fetchResults');

describe('Filter', () => {
  let wrapper
  let mockFilterResults
  let mockIsLoading
  let mockHasErrored
  let mockFetchResults
  let mockAddFilterResults

  beforeEach(() => {
    mockFilterResults = [{title: 'boost'}, { title: 'smoothie'}];
    mockFetchResults = jest.fn();
    mockAddFilterResults = jest.fn();
    mockHasErrored = false
    mockIsLoading = true

    wrapper = shallow(<Filter
      filterResults={mockFilterResults}
      isLoading={mockIsLoading}
      hasErrored={mockHasErrored}
      fetchResults={mockFetchResults}
      mockAddFilterResults={mockAddFilterResults}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update state after handleSpecialty runs', () => {

  });

  it('should update state after handleMCT runs', () => {

  });

  it('should update state after handleAllergens runs', () => {
    
  })

  it('should return a filterResults array', () => {
    const mockState = {
      filterResults: mockFilterResults,
      addFilterResults: mockAddFilterResults
    };

    const expectedProps = {
      filterResults: mockFilterResults
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expectedProps);
  });

  it('should call dispatch with addFilterResults', () => {
    const mockState = {
      filterResults: mockFilterResults,
      addFilterResults: mockAddFilterResults,
      fetchResults: mockFetchResults
    };

    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const actionToDispatch = action.addFilterResults({name: 'Delicious'}, {name: 'Would eat again'});
    mappedProps.addFilterResults({name: 'Delicious'}, {name: 'Would eat again'});
    expect(mockDispatch).toBeCalledWith(actionToDispatch);
  });

  it('should call dispatch with fetchResults', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const actionToDispatch = fetchResults('www.someUrl');
    mappedProps.fetchResults('www.someUrl');
    expect(mockDispatch).toBeCalledWith(actionToDispatch);
  })
})