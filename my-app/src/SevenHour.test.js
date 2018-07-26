import React from 'react';
import { shallow, mount } from 'enzyme';

import SevenHour from './SevenHour';

describe( 'SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SevenHour hourlyArray={ [] } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Cards', () => {
    expect(wrapper.find('Card').length).toEqual(1);
  });


})