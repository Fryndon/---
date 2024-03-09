const N = 3;
const COMB_LEN = 3;

const players = ["X", "O"];
let currentPlayerIndex = 0;
let cnt = 1;
let gameOver = false;
const field = Array.from({ length: N }, (i) =>
  Array.from({ length: N }, () => " ")
);

showTable(field);

document.querySelector("#info").innerText = `Ход 1: ходит ${players[0]}`;
document.querySelector("#gameField").addEventListener("click", (e) => {
  if (!gameOver) {
    step(+e.target.dataset.i, +e.target.dataset.j);
  }
});
