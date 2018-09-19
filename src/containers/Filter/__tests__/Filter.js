import {Filter, mapStateToProps, mapDispatchToProps} from '../Filter';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../../actions';
import { fetchResults } from '../../../thunks/fetchResults';
import { formulas as mockFormulas } from '../../../data-helper/mockFormula';

jest.mock('../../../thunks/fetchResults');

describe('Filter', () => {
  let wrapper
  let mockEvent
  let mockHistory
  let mockSpecialtyData
  let mockAllergenData
  let mockMCTData
  let mockFilterResults
  let mockIsLoading
  let mockHasErrored
  let mockFetchResults
  let mockAddFilterResults

  beforeEach(() => {
    mockFilterResults = [{title: 'boost'}, { title: 'smoothie'}];
    mockEvent = { preventDefault: jest.fn() };
    mockHistory = [];
    mockSpecialtyData = {value: 'VHP'}
    mockAllergenData = {value: ['Casein']}
    mockMCTData = {value: 'Low'}
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
      history={mockHistory}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state after handleSpecialty runs', () => {
    wrapper.instance().handleSpecialty(mockEvent, mockSpecialtyData);

    const results = wrapper.state('specialty')

    const expected = [mockSpecialtyData.value]

    expect(results).toEqual(expected)
  });

  it('should update state after handleAllergens runs', () => {
    wrapper.instance().handleAllergens(mockEvent, mockAllergenData);

    const results = wrapper.state('allergens')

    const expected = [...mockAllergenData.value]

    expect(results).toEqual(expected)
  });

  it('should update state after handleMCT runs', () => {
    wrapper.instance().handleMCT(mockEvent, mockMCTData);

    const results = wrapper.state('mct')

    const expected = [mockMCTData.value]

    expect(results).toEqual(expected)    
  });

  it('should dispatch the fetchResults thunk when the form is submitted with query parameters', () => {
    wrapper.instance().handleMCT(mockEvent, mockMCTData);
    wrapper.instance().handleAllergens(mockEvent, mockAllergenData);
    wrapper.instance().handleSpecialty(mockEvent, mockSpecialtyData);

    wrapper.instance().handleSubmit(mockEvent);

    let url = 'https://nurish-app.herokuapp.com/api/v1/formulas?&allergens=Casein&type=VHP&mct_lct=Low';

    expect(mockFetchResults).toHaveBeenCalledWith(url);   
  });

  it('should dispatch the fetchResults thunk when the form is submitted with no query parameters', () => {
    wrapper.instance().handleSubmit(mockEvent);

    let url = 'https://nurish-app.herokuapp.com/api/v1/formulas?';

    expect(mockFetchResults).toHaveBeenCalledWith(url);   
  });

  it.skip('should direct the user to the formulas page of the application', () => {
    wrapper.instance().handleSubmit(mockEvent);

    expect(mockHistory).toEqual(['/formulas']);
  });

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