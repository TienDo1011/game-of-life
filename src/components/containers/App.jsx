import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Board from "./Board.jsx";
import Controls from "./Controls.jsx";
import CounterContainer from "./CounterContainer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Board />
            </Col>
          </Row>
          <Row>
            <Controls />
            <CounterContainer />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
