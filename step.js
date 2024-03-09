function step(i, j) {
  if (field[i][j] !== " ") {
    return;
  }

  field[i][j] = players[currentPlayerIndex];
  cnt++;
  document.querySelector(`[data-i="${i}"][data-j="${j}"]`).innerText =
    field[i][j];

  const rotatedField = field[0]
    .map((_, j) => field.map((row) => row[j]))
    .reverse();
  if (checkWinner(field, i, j) || checkWinner(rotatedField, i, j)) {
    gameOver = true;
    document.querySelector("#info").innerText = `Ход ${cnt - 1}: победил ${
      players[currentPlayerIndex]
    }. Поздравляю !!!`;
    return;
  }

  if (cnt === N * N + 1) {
    document.querySelector("#info").innerText = `Ход ${cnt - 1}: ничья`;
    return;
  }
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  document.querySelector(
    "#info"
  ).innerText = `Ход ${cnt}: ходит ${players[currentPlayerIndex]}`;
}
