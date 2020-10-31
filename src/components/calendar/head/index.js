import React from 'react';

import { Row, Cell } from '../Style';

const Head = (props) => {
  return (
    <Row isHead>
      <Cell>Sun</Cell>
      <Cell>Mon</Cell>
      <Cell>Tue</Cell>
      <Cell>Wed</Cell>
      <Cell>Thu</Cell>
      <Cell>Fri</Cell>
      <Cell>Sat</Cell>
    </Row>
  );
};

export default Head;