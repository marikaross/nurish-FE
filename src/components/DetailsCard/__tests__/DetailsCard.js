import React from 'react';
import { shallow } from 'enzyme';
import {DetailsCard, mapStateToProps, mapDispatchToProps} from '../DetailsCard.js';
import * as action from '../../../actions';


describe('DetailsCard', () => {
  let wrapper



  beforeEach(() => {
    wrapper = shallow(<DetailsCard />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  
})