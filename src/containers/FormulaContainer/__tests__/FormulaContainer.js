import React from 'react';
import { shallow } from 'enzyme';
import FormulaContainer from '../FormulaContainer';

describe('FormulaContainer', () => {
  let wrapper
  let mockFilterResultCard
  let mockFormulaCard

  beforeEach(() => {
    mockFormulaCard = jest.fn();
    mockFilterResultCard = jest.fn();
    wrapper = shallow(<FormulaContainer
      formulaCard={mockFormulaCard}
      filterResultCard={mockFilterResultCard}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})