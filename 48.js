/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const length = matrix.length;

  for (let x = 0; x < length / 2; x ++) {
    for (let y = x; y < length - x - 1; y ++) {
      let sourceIndex = { x, y };
      let sourceValue = getValue(matrix, sourceIndex);

      for (let i = 0; i < 4; i++) {
        const destinationIndex = getRotatedIndex(length, sourceIndex);

        const temp = getValue(matrix, destinationIndex);
        setValue(matrix, destinationIndex, sourceValue);
        sourceIndex = destinationIndex;
        sourceValue = temp;
      }
    }
  }

  return matrix;
};

function getRotatedIndex(length, index) {
  return {
    x: index.y,
    y: length - index.x - 1
  };
}

function getValue(matrix, index) {
  return matrix[index.x][index.y];
}

function setValue(matrix, index, value) {
  matrix[index.x][index.y] = value;
}
