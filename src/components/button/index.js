import React from 'react';
import { Button as BulmaButton } from 'react-bulma-components/full';
import './styles.css';

import PropTypes from 'prop-types';

const Button = ({ index, value, onclick }) => (
  <BulmaButton index={index} className="nav-button" onClick={onclick} color="danger">
    {value}
  </BulmaButton>
);

Button.propTypes = {
  value: PropTypes.string,
  onclick: PropTypes.func,
  index: PropTypes.number,
};

export default Button;
