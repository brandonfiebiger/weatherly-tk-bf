import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrentWeather from './CurrentWeather';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})