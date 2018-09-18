import React from 'react';
import {Form} from '../Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
