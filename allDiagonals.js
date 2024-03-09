function collectArrayOfDiagonals(matrix, row1, col1, diagonalArray) {
  const currentDiag = [];
  if (row1 > 0) {
    const diagonal = findDiag(matrix, row1, col1, []);
    diagonalArray.push(diagonal.join(""));
    row1--;
    collectArrayOfDiagonals(matrix, row1, col1, diagonalArray);
  }

  if (row1 === 0 && col1 <= N - COMB_LEN) {
    diagonal = findDiag(matrix, row1, col1, []);
    diagonalArray.push(diagonal.join(""));
    col1++;
    collectArrayOfDiagonals(matrix, row1, col1, diagonalArray);
  }
  return diagonalArray;
}
