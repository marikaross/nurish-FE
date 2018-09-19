import {App, mapStateToProps, mapDispatchToProps} from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../../actions';
import { fetchFormula } from '../../../thunks/fetchFormula';

jest.mock('../../../thunks/fetchFormula');

describe('App', () => {
  let wrapper
  let mockFormulas
  let mockIsLoading
  let mockHasErrored
  let mockFetchFormula
  let mockAddFormulas
  let mockAnimateLogo


  beforeEach(() => {
    mockFormulas = [{title: 'boost'}, { title: 'smoothie'}];
    mockFetchFormula = jest.fn();
    mockAddFormulas = jest.fn();
    mockHasErrored = false;
    mockIsLoading = true;
    mockAnimateLogo = jest.fn();

    wrapper = shallow(<App
      formulas={mockFormulas}
      isLoading={mockIsLoading}
      hasErrored={mockHasErrored}
      fetchFormula={mockFetchFormula}
      addFormulas={mockAddFormulas}
      animateLogo={mockAnimateLogo}/>)
  })


  it.skip('should match the snapShot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should set the state to initialLogo when the case is collapse-logo', () => {
    const result = wrapper.instance().animateLogo('collapse-logo');
    const expected = wrapper.state({position: 'initial-logo'});
    expect(result).toEqual(expected);
  });

  it('should set the state to initialLogo when the case is expand-logo', () => {
    const result = wrapper.instance().animateLogo('expand-logo')
    const expected = wrapper.state({position: 'initial-logo'})
    expect(result).toEqual(expected)
  });

  it('should set the state to initialLogo when the case is collapse-logo', () => {
    const result = wrapper.instance().animateLogo()
    const expected = wrapper.state({position: 'expand-logo'})
    expect(result).toEqual(expected)
  });

  it('should return a formulas array', () => {
    const mockState = {
      formulas: mockFormulas,
      addFormulas: mockAddFormulas
    };

    const expectedProps = {
      formulas: mockFormulas
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expectedProps);
  });

  it('should call dispatch with addFormula', () => {
    const mockState = {
      forumlas: mockFormulas,
      addFormulas: mockAddFormulas,
      fetchFormula: mockFetchFormula
    };

    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const actionToDispatch = action.addFormulas({name: 'smoothie-town'});
    mappedProps.addFormulas({name: 'smoothie-town'});
    expect(mockDispatch).toBeCalledWith(actionToDispatch);
  });

  it('should call dispatch with fetchFormula', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const actionToDispatch = fetchFormula('www.fakeURL');
    mappedProps.fetchFormula('www.fakeURL');
    expect(mockDispatch).toBeCalledWith(actionToDispatch);
  })
})