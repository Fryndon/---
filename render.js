import {field} from './main.js';
function showTable(field){
    const tbl = document.createElement('table')
    arr.forEach((row, i) => {
        const tr = document.createElement('tr');
        row.forEach((cell, j) => {
            const td = document.createElement('td')
            td.dataset.i = i;
            td.dataset.j = j;
            tr.append(td);
        });

        tbl.append(tr);

    })
    document.querySelector('#gameField').append(tbl)
}
export { showTable };