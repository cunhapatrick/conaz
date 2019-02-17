import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading } from 'react-bulma-components/full';
import './styles.css';

const Body = ({ temp }) => (
  <Container className="currentTemp">
    <Heading size={2}>{`${temp}º`}</Heading>
  </Container>
);

Body.propTypes = {
  temp: PropTypes.number,
};

export default Body;
