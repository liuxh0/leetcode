/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const rowNumbers = new Set();
    const colNumbers = new Set();
    const boxNumbers = new Set();

    const boxIndex = {
      x: i % 3,
      y: Math.floor(i / 3)
    };

    for (let j = 0; j < 9; j++) {
      const rowNumber = board[i][j];
      const colNumber = board[j][i];

      const boxNumberRelativeIndex = {
        x: j % 3,
        y: Math.floor(j / 3)
      };
      const boxNumberIndex = {
        x: boxIndex.x * 3 + boxNumberRelativeIndex.x,
        y: boxIndex.y * 3 + boxNumberRelativeIndex.y
      };
      const boxNumber = board[boxNumberIndex.x][boxNumberIndex.y];

      try {
        if (rowNumber !== '.') {
          addValueToSetOrThrowError(rowNumber, rowNumbers);
        }

        if (colNumber !== '.') {
          addValueToSetOrThrowError(colNumber, colNumbers);
        }

        if (boxNumber != '.') {
          addValueToSetOrThrowError(boxNumber, boxNumbers);
        }
      } catch (error) {
        return false;
      }
    }
  }

  return true;
};

/**
 * If the set does not contain the value, then add the value to the set. Otherwise
 * throw an error.
 * @param {any} value
 * @param {Set} set
 */
function addValueToSetOrThrowError(value, set) {
  if (!set.has(value)) {
    set.add(value);
  } else {
    throw new Error();
  }
}
