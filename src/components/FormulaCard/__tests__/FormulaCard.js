import React from 'react';
import { shallow } from 'enzyme';
import { FormulaCard } from '../FormulaCard.js';

describe('FormulaCard', () => {
  let wrapper
  let mockUsage

  beforeEach(() => {

  	mockUsage = 'Breakfast Substition, Renal Failure'

    wrapper = shallow(<FormulaCard 
    		usage={mockUsage}
    	/>)
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});