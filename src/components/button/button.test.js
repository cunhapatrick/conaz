import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const mock = jest.fn(() => "It's working");
let wrapper;

describe('Button Component Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Button />);
    wrapper.setProps({
      index: 1,
      onclick: mock,
      value: 'Anterior',
    });
  });

  it('Should renders button element', () => {
    expect(wrapper.find('.nav-button')).toHaveLength(1);
  });

  it('Should work onClick function', () => {
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
