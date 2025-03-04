const board = document.querySelector('.game-board');
let currentTurn = 'X';

board.childNodes.forEach(cell => {
    cell.addEventListener('click', () => {
        if (currentTurn == 'X') {
            cell.textContent = 'X';
            currentTurn = 'O';
        }
        else {
            cell.textContent = 'O';
            currentTurn = 'X';
        }
    })
});

