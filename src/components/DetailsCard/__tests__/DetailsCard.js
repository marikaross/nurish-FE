import React from 'react';
import { shallow } from 'enzyme';
import { Load } from '../../Loader/Loader';
import {DetailsCard, mapStateToProps, mapDispatchToProps} from '../DetailsCard.js';
import { fetchSingleFormula } from '../../../thunks/fetchSingleFormula.js';
import { mockFormula } from '../../../data-helper/mockFormula'

jest.mock('../../../thunks/fetchSingleFormula');

describe('DetailsCard', () => {
  let wrapper;
  let mockFetchSingleFormula;
  let mockhistory;
  let mockAnimateLogo;

  beforeEach(() => {
    mockhistory = [];
    mockAnimateLogo = jest.fn();
    mockFetchSingleFormula = jest.fn();
    
    wrapper = shallow(<DetailsCard 
      fetchSingleFormula={mockFetchSingleFormula}
      formula={mockFormula}
      history={mockhistory}
      animateLogo={mockAnimateLogo} 
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call animateLogo when mounted', () => {
    wrapper.instance();

    expect(mockAnimateLogo).toHaveBeenCalledWith('collapse-logo');
  });

  it('should call animateLogo when unmounted', () => {
    wrapper.instance().componentWillUnmount();

    expect(mockAnimateLogo).toHaveBeenCalledWith('expand-logo');
  });

  it('should render the appropriate content if there is info in the state', () => {
    const loadWrapper = shallow(<Load />);

    wrapper.setState();

    expect(wrapper).toMatchSnapshot();
  })

  it('should render the Load component if there is no info in the state', () => {
    wrapper = shallow(<DetailsCard 
        fetchSingleFormula={mockFetchSingleFormula}
        formula={{}}
        history={mockhistory}
        animateLogo={mockAnimateLogo} 
    />);

    const loadWrapper = shallow(<Load />);

    wrapper.setState();

    expect(wrapper).toMatchSnapshot();
  })

  it('should return a null state object if there is no formula', () => {
    wrapper = shallow(<DetailsCard 
      fetchSingleFormula={mockFetchSingleFormula}
      history={mockhistory}
      animateLogo={mockAnimateLogo} 
    />);

    const results = wrapper.state();

    expect(results).toBe(null);
  })

  it('should return a formula object', () => {
      const mockState = {
      formula: undefined
    };

    const expectedProps = {
      formula: undefined
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expectedProps);
  });

  it('should call dispatch with fetchSingleFormula', () => {
    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const actionToDispatch = fetchSingleFormula('www.mockURL.com');

    mappedProps.fetchSingleFormula('www.mockURL.com');

    expect(mockDispatch).toBeCalledWith(actionToDispatch);
  });
  
});