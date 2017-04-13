import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="danger">{this.props.count}</Button>
      </div>
    );
  }
}

export default Counter;
