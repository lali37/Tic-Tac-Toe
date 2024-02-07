
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(cell, index) {
    if (cell.innerText || gameOver) {
        return;
    }
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    if (checkWin()) {
        alert(currentPlayer + ' wins!');
        gameOver = true;
        return;
    }
    if (checkDraw()) {
        alert('Draw!');
        gameOver = true;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];
    return winConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => cell);
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

