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
    this.TIME = 300;
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
      this.props.togglePlay();
    } else {
      this.interval = setInterval(this.props.nextTick, this.TIME);
      this.props.togglePlay();
    }
  }

  render() {
    return (
      <div>
        <Col xs={8}>
          <ButtonGroup>
            <ControlButton handleClick={this.randomize} glyph="random" />
            <ControlButton handleClick={this.clear} text="Clear" />
            <ControlButton
              handleClick={this.togglePlay}
              glyph={this.props.gameState ? 'pause' : 'play'}
            />
            <ControlButton
              handleClick={this.props.nextTick}
              glyph="step-forward"
            />
          </ButtonGroup>
        </Col>
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
