import React, { Component } from "react";
import Square from "../presentationals/Square.jsx";
import { connect } from "react-redux";
import { toggleAlive, nextTick } from "../../actions/actionCreators";

class Board extends Component {
  render() {
    return (
      <div>
        <table style={{ padding: 0, margin: 0, border: 1 }}>
          {this.props.board.map((row, xIndex) => {
            return (
              <tr>
              {
                row.map((obj, yIndex) => {
                  return (
                    <td>
                      <Square
                        status={obj.status}
                        x={xIndex}
                        y={yIndex}
                        toggleAlive={this.props.toggleAlive}
                      />
                    </td>
                  )
                })
              }
            </tr>
            )
          })}
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
