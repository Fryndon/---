function findDiag(matrix, row1, col1, currentDiag) {
  if (row1 < N && col1 < N) {
    currentDiag.push(matrix[row1][col1]);
    row1++;
    col1++;
    findDiag(matrix, row1, col1, currentDiag);
  }
  return currentDiag;
}
