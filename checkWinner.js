function checkWinner(arr = [], i, j) {
  const startRow = N - COMB_LEN;
  const startCol = 0;
  const diagonalArray = [];

  const rowCombinations = arr[i].join("");
  if (players.some((el) => rowCombinations.includes(el.repeat(CombLen)))) {
    return true;
  }

  const LeftToRightDiagonnals = collectArrayOfDiagonals(
    arr,
    startRow,
    startCol,
    diagonalArray
  );
  if (
    players.some((el) =>
      LeftToRightDiagonnals.some((el1) => el1.includes(el.repeat(CombLen)))
    )
  ) {
    return true;
  }

  return false;
}
