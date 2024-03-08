import { showTable } from './render.js';
import { step } from './game.js';

const N = 4
const CombLen = 3
const players = ['X', 'O']
const field = Array.from({ length: N }, (i) => Array.from({ length: N },()=>' '));

showTable(field)

document.querySelector('#info').innerText = `Ход 1: ходит ${players[0]}`
document.querySelector('#gameField').addEventListener("click", (e) => {
step(+e.target.dataset.i, +e.target.dataset.j)
})

export {N, CombLen, field, players};