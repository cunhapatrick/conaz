import React from 'react';
import { Heading, Container } from 'react-bulma-components/full';
import './styles.css';
import PropTypes from 'prop-types';

const Header = ({ name, datetime }) => (
  <Container className="header-container">
    <Heading>{name}</Heading>
    <Heading subtitle size={6}>
      {datetime}
    </Heading>
  </Container>
);

Header.propTypes = {
  name: PropTypes.string,
  datetime: PropTypes.string,
};

export default Header;
