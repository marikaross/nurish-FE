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

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
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
});