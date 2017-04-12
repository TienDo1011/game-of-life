export const initialBoard = (height, width, makeRandom = false) => {
  const grid = [];
  for (const i = 0; i < height; i++) {
    const row = [];
    let value;
    for (const j = 0; j < width, j++) {
      if (makeRandom) {
        value = Math.random() > 0.85;
      }
      row.push({
        status: !!value,
      });
    };
    grid.push(row);
  }
  return grid;
}

const calculateNeighbors = (board, x, y) => {
  const upperRow, lowerRow, leftColumn, rightColumn;
  let count;
  upperRow = (x === 0) ? (board.length - 1) : (x - 1);
  lowerRow = (x === (board.length - 1)) ? 0 : (x + 1);
  leftColumn = (y === 0) ? (board[0].length - 1) : (y - 1);
  rightColumn = (y === (board[0].length - 1)) ? 0 : (y + 1);

  allAdjacentPosition = [
    {x: upperRow, y: leftColumn}, {x: upperRow, y}, {x: upperRow, y: rightColumn},
    {x, y: leftColumn}, {x, y: rightColumn},
    {x: lowerRow, y: leftColumn}, {x: lowerRow, y}, {x: lowerRow, y: rightColumn},
  ];

  allAdjacentPosition.forEach(({x, y}) => {
    if (board[x][y].status === true) {
      count += 1;
    }
  });
  return count;
}

export const advanceBoard = (board) => {

}