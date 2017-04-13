import React, { Component } from "react";
import { Col, ButtonGroup } from "react-bootstrap";
import ControlButton from "../presentationals/ControlButton.jsx";
import { connect } from "react-redux";
import {
  randomize,
  clear,
  togglePlay,
  nextTick
} from "../../actions/actionCreators";

class Controls extends Component {
  constructor() {
    super();
    this.interval;
    this.TIME = 1000;
    this.randomize = this.randomize.bind(this);
    this.clear = this.clear.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.props.nextTick, this.TIME);
  }

  randomize() {
    clearInterval(this.interval);
    this.props.randomize();
  }

  clear() {
    clearInterval(this.interval);
    this.props.clear();
  }

  togglePlay() {
    if (this.props.gameState) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(this.props.nextTick, this.TIME);
    }
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Col xs={8}>
            <ControlButton handleClick={this.randomize} text="Randomize" />
            <ControlButton handleClick={this.clear} text="Clear" />
            <ControlButton handleClick={this.togglePlay} text="Play/Pause" />
            <ControlButton
              handleClick={this.props.nextTick}
              text="Step-Forward"
            />
          </Col>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.isRunning
});

const mapDispatchToProps = dispatch => ({
  randomize: () => dispatch(randomize()),
  clear: () => dispatch(clear()),
  togglePlay: () => dispatch(togglePlay()),
  nextTick: () => dispatch(nextTick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
