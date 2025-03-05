const info = document.querySelector('.text');
const board = document.querySelector('.game-board');
const restartBtn = document.querySelector('.restart');
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
        checkBoard();
        updateInfo();
    })
});

restartBtn.addEventListener('click', () => {
    board.childNodes.forEach(cell => {
        cell.textContent = '';
    })
    currentTurn = 'X';
    updateInfo();
});

function updateInfo() {
    if(currentTurn === 'X') {
        info.textContent = 'X turn';
    } else {
        info.textContent = 'O turn';
    }
}

function checkBoard() {
    const cells = [...board.children];
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            info.textContent = `${cells[a].textContent} Wins!`;
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
        info.textContent = "It's a Draw!";
    }
}

updateInfo();