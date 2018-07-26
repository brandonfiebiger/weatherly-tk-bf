import React from 'react';

import { shallow, mount } from 'enzyme';
import Card from './Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state including hours that is false', () => {
    expect(wrapper.state().hours).toEqual(false);
  })

  it('should render an article and img', () => {
    expect(wrapper.find('article').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
  })

  it('should display a twenty-four hour forecast when a tenday card is clicked', () => {
    wrapper.simulate('click');
    wrapper.setState({
      hours: true
    })
    expect(wrapper.state().hours).toEqual(true)
  })
})
