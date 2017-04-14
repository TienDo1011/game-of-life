import shortid from 'shortid';
import React, { Component } from "react";
import Square from "../presentationals/Square.jsx";
import { connect } from "react-redux";
import { toggleAlive, nextTick } from "../../actions/actionCreators";

class Board extends Component {
  render() {
    return (
      <div>
        <style>{`
          table, tr, td{
          border:1px solid black;
          }
        `}</style>
        <table>
          <tbody>
          {this.props.board.map((row, xIndex) => {
            return (
              <tr key={shortid.generate()}>
              {
                row.map((obj, yIndex) => {
                  return (
                      <Square
                        key={shortid.generate()}
                        status={obj.status}
                        x={xIndex}
                        y={yIndex}
                        toggleAlive={this.props.toggleAlive}
                      />
                  )
                })
              }
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board
});

const mapDispatchToProps = dispatch => ({
  toggleAlive: (x, y) => dispatch(toggleAlive(x, y))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
