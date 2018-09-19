import React from 'react';
import { shallow } from 'enzyme';
import {FormulaContainer, mapStateToProps, mapDispatchToProps} from '../FormulaContainer';
import * as action from '../../../actions';

describe('FormulaContainer', () => {
  let wrapper
  let mockFilterResultCard
  let mockFormulaCard
  let mockAddFilterResults
  let mockFilterResults
  let mockAnimateLogo

  beforeEach(() => {
    mockFormulaCard = jest.fn();
    mockFilterResultCard = jest.fn();
    mockAddFilterResults = jest.fn();
    mockFilterResults = [{title: 'boost'}, { title: 'smoothie'}];
    mockAnimateLogo = jest.fn()

    wrapper = shallow(<FormulaContainer
      formulaCard={mockFormulaCard}
      filterResultCard={mockFilterResultCard}
      filterResults={mockFilterResults}
      mockAddFilterResults={mockAddFilterResults}
      animateLogo={mockAnimateLogo}
      />);
  });

  it('should match the snapshot when there are filtered results', () => {
    let mockFormulas = [{title: 'boost'}, { title: 'smoothie'}];

    wrapper = shallow(<FormulaContainer
      formulaCard={mockFormulaCard}
      filterResultCard={mockFilterResultCard}
      filterResults={[]}
      mockAddFilterResults={mockAddFilterResults}
      formulas={mockFormulas}
      animateLogo={mockAnimateLogo}
      />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot when there are no filtered results', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call animateLogo when mounted', () => {
    wrapper.instance()

    expect(mockAnimateLogo).toHaveBeenCalledWith('collapse-logo')
  });

  it('should call animateLogo when unmounted', () => {
    wrapper.instance().componentWillUnmount()

    expect(mockAnimateLogo).toHaveBeenCalledWith('expand-logo')
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
});