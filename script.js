const info = document.querySelector('.text');
const board = document.querySelector('.game-board');
let currentTurn = 'X';

board.childNodes.forEach(cell => {
    cell.addEventListener('click', () => {
        if (currentTurn == 'X' && cell.textContent == '') {
            cell.textContent = 'X';
            currentTurn = 'O';
        }
        else if (currentTurn == 'O' && cell.textContent == '') {
            cell.textContent = 'O';
            currentTurn = 'X';
        }
        showTurn();
    })
});

function showTurn() {
    if(currentTurn === 'X') {
        info.textContent = 'X turn';
    } else {
        info.textContent = 'O turn';
    }
}

showTurn();