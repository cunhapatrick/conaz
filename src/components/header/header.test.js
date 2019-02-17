import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

let wrapper;
describe('Header Component Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Header />);
    wrapper.setProps({
      name: 'test',
      datetime: 'fake datetime test',
    });
  });

  it('Should render a container with className ".header-container"', () => {
    expect(wrapper.find('.header-container')).toHaveLength(1);
  });

  it('Should render the headings', () => {
    const child = wrapper
      .find('.header-container')
      .first()
      .children();
    expect(child).toHaveLength(2);
  });
});
