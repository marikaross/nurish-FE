import React from 'react';
import { shallow } from 'enzyme';
import { Load } from '../Loader.js';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

describe('Loader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Load />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});