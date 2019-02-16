import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';

import App from './App';

it('Should renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Routes />)).toBe(true);
});
