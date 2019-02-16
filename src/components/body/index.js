import React from 'react';

import { Container, Heading } from 'react-bulma-components/full';

export default props => (
  <Container>
    <Heading>{props.temp}</Heading>
  </Container>
);
