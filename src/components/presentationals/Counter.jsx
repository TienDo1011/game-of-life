import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
  render() {
    return (
      <span>
        <Button bsStyle="danger">{this.props.count}</Button>
      </span>
    );
  }
}

export default Counter;
