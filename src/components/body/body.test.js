import React from 'react';
import { shallow } from 'enzyme';
import Body from './index';

let wrapper;

describe('Body Component Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Body />);
    wrapper.setProps({ temp: 25 });
  });

  it("Should renders a container element with '.currentTemp' className", () => {
    expect(wrapper.find('.currentTemp')).toBeDefined();
  });

  it('Should renders a heading element', () => {
    expect(wrapper.find('f')).toHaveLength(1);
  });

  it('Should render the current temperature value', () => {
    const child = shallow(wrapper.find('f').get(0));
    expect(child.childAt(0).text()).toBe('25º');
  });
});
