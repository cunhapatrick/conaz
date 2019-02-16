import React from 'react';

import { Container, Columns, Heading } from 'react-bulma-components/full';

export default props => (
  <Container>
    <Columns>
      <Columns.Column>
        <Heading>{props.temp_max}</Heading>
        <Heading>Max</Heading>
      </Columns.Column>
      <Columns.Column>
        <Heading>{props.temp_min}</Heading>
        <Heading>Min</Heading>
      </Columns.Column>
      <Columns.Column>
        <Heading>{props.humidity}</Heading>
        <Heading>Umidade</Heading>
      </Columns.Column>
    </Columns>
  </Container>
);
