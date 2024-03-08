import {N, CombLen, field, players} from './main.js';
let currentPlayerIndex = 0
let cnt = 1
function step(i,j){
const rotatedField = field[0].map((_, j) => field.map(row => row[j])).reverse()

if (field[i][j] !== ' ') {
    return;
}

if (checkWinner(rotatedField) || checkWinner(field)) {
    return; // Игра уже закончена, просто выходим из функции
}

field[i][j] = players[currentPlayerIndex]
cnt++;
document.querySelector(`[data-i="${i}"][data-j="${j}"]`).innerText = field[i][j]

if(checkWinner(rotatedField) || checkWinner(field)){
    document.querySelector('#info').innerText = `Ход ${cnt-1}: победил ${players[currentPlayerIndex]}. Поздравляю !!!`
    return;
}

if(cnt === N*N+1){
    document.querySelector('#info').innerText = `Ход ${cnt-1}: ничья`
    return;
}
currentPlayerIndex = (currentPlayerIndex + 1) % players.length

document.querySelector('#info').innerText = `Ход ${cnt}: ходит ${players[currentPlayerIndex]}`
}

function checkWinner(matrix=[]) {
const startRow = N - CombLen
const startCol = 0
const currentDiag = []
const diagonalArray = []

if (players.some(el => matrix.map(row => row.join('')).some(row => row.includes(el.repeat(CombLen))))){
    return true;
}

const LeftToRightDiagonnals = collectArrayOfDiagonals(matrix, startRow, startCol, [])
if (players.some(el => LeftToRightDiagonnals.some(el1 => el1.includes(el.repeat(CombLen))))){
    return true;
} 

return false;
}

function collectArrayOfDiagonals(matrix, row1, col1, diagonalArray){
if(row1 > 0){
    const diagonal = findDiag(matrix, row1, col1, [])
    diagonalArray.push(diagonal.join(''))
    row1--;
    collectArrayOfDiagonals(matrix, row1, col1, diagonalArray)
}

if(row1 === 0 && col1 <= N-CombLen){
    const diagonal = findDiag(matrix, row1, col1, [])
    diagonalArray.push(diagonal.join(''))
    col1++;
    collectArrayOfDiagonals(matrix, row1, col1, diagonalArray)
}
return diagonalArray;
}

function findDiag(matrix, row1, col1, currentDiag){
if(row1 < N && col1 < N){
    currentDiag.push(matrix[row1][col1])
    row1++;
    col1++;
    findDiag(matrix, row1, col1, currentDiag)
}
return currentDiag;
}

export { step, checkWinner, collectArrayOfDiagonals, findDiag };