export const initialGrid = (height, width, makeRandom = false) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    let value;
    for (let j = 0; j < width; j++) {
      if (makeRandom) {
        value = Math.random() > 0.5;
      }
      row.push({
        status: !!value,
      });
    }
    grid.push(row);
  }
  return grid;
};

const calculateNeighbors = (board, x, y) => {
  let upperRow, lowerRow, leftColumn, rightColumn;
  let count;
  upperRow = (x === 0) ? (board.length - 1) : (x - 1);
  lowerRow = (x === (board.length - 1)) ? 0 : (x + 1);
  leftColumn = (y === 0) ? (board[0].length - 1) : (y - 1);
  rightColumn = (y === (board[0].length - 1)) ? 0 : (y + 1);

  const allAdjacentPosition = [
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

export const advanceGrid = (board) => {
  const height = board.length;
  const width = board[0].length;
  const newBoard = initialGrid(board.length, board[0].length);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const isAlive = board[i][j].status;
      const numberOfNeighbors = calculateNeighbors(board, i, j);
      if (isAlive) {
        if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
          newBoard[i][j] = { status: false};
        } else {
          newBoard[i][j] = { status: true};
        }
      } else {
        if (numberOfNeighbors === 3) {
          newBoard[i][j] = { status: true};
        } else {
          newBoard[i][j] = { status: false};
        }
      }
    }
  }
  return newBoard;
}