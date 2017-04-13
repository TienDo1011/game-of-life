import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Counter from "../presentationals/Counter.jsx";
import { connect } from "react-redux";

class CounterContainer extends Component {
  render() {
    return (
      <div>
        <Col xs={4}>
          <Counter count={this.props.count} />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(CounterContainer);
