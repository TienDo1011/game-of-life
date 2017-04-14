import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Square extends Component {
  constructor() {
    super();
    this.toggleAlive = this.toggleAlive.bind(this);
  }

  toggleAlive() {
    const p = this.props;
    p.toggleAlive(p.x, p.y);
  }

  render() {
    const p = this.props;
    const color = p.status ? "yellow" : "white";
    return (
      <td style={{ backgroundColor: color, width: '20px', height: '20px' }} onClick={this.toggleAlive} >
      </td>
    );
  }
}

export default Square;
