import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

let wrapper;
describe('Footer Component Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Footer />);
    wrapper.setProps({
      tempMax: 33,
      tempMin: 27,
      humidity: 80,
    });
  });

  it('Should render a container with className "footer-container"', () => {
    expect(wrapper.find('.footer-container')).toHaveLength(1);
  });

  it('Should render 3 columns', () => {
    const child = wrapper
      .find('.footer-container')
      .first()
      .children()
      .first()
      .children();
    expect(child).toHaveLength(3);
  });
});
