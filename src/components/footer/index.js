import React from 'react';
import PropTypes from 'prop-types';

import { Container, Columns, Heading } from 'react-bulma-components/full';
import './styles.css';

const Footer = ({ tempMax, tempMin, humidity }) => (
  <Container className="footer-container">
    <Columns>
      <Columns.Column>
        <Heading size={4}>{`${tempMax}º`}</Heading>
        <Heading subtitle size={5}>
          {'Max'}
        </Heading>
      </Columns.Column>
      <Columns.Column>
        <Heading size={4}>{`${tempMin}º`}</Heading>
        <Heading subtitle size={5}>
          {'Min'}
        </Heading>
      </Columns.Column>
      <Columns.Column>
        <Heading className="humidity-temp" size={4}>
          {humidity}
        </Heading>
        <Heading subtitle size={5}>
          {'Umidade'}
        </Heading>
      </Columns.Column>
    </Columns>
  </Container>
);

Footer.propTypes = {
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
  humidity: PropTypes.number,
};

export default Footer;
