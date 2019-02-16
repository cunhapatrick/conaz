import React, { Fragment } from 'react';
import { Heading } from 'react-bulma-components/full';
import PropTypes from 'prop-types';

export default props => (
  <Fragment>
    <Heading>{props.name}</Heading>
    <Heading>{props.datetime}</Heading>
  </Fragment>
);
