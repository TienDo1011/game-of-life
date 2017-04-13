import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ControlButton extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.props.handleClick}>
          {this.props.text}
        </Button>
      </div>
    );
  }
}

export default ControlButton;
