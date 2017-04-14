import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class ControlButton extends Component {
  render() {
    return (
      <span>
        <Button bsStyle="primary" onClick={this.props.handleClick}>
          <Glyphicon glyph={this.props.glyph} />
          {this.props.text}
        </Button>
      </span>
    );
  }
}

export default ControlButton;
