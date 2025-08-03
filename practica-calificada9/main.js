const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset-btn');
const turnSymbol = document.querySelector('.turn-symbol');

let scoreX = 0;
let scoreO = 0;
let scoreTies = 0;
const scoreXEl = document.getElementById('score-x');
const scoreOEl = document.getElementById('score-o');
const scoreTiesEl = document.getElementById('score-ties');

let board = Array(9).fill(null);
let currentPlayer = 'x';
let playerMark = 'x';
let mode = 'cpu';
let gameOver = false;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function updateTurnIndicator() {
  turnSymbol.textContent = currentPlayer.toUpperCase();
}

function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      if (board[a] === 'x') {
        scoreX++;
        scoreXEl.textContent = scoreX;
        alert("¡Ganó X!");
      } else {
        scoreO++;
        scoreOEl.textContent = scoreO;
        alert("¡Ganó O!");
      }
      return;
    }
  }

  if (!board.includes(null)) {
    gameOver = true;
    scoreTies++;
    scoreTiesEl.textContent = scoreTies;
    alert("¡Empate!");
  }
}

function computerMove() {
  const emptyCells = board.map((cell, i) => cell === null ? i : null).filter(i => i !== null);
  if (emptyCells.length === 0 || gameOver) return;

  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[randomIndex] = currentPlayer;
  cells[randomIndex].textContent = currentPlayer.toUpperCase();
  cells[randomIndex].classList.add(`text-${currentPlayer}`);

  checkWinner();
  if (!gameOver) {
    currentPlayer = playerMark;
    updateTurnIndicator();
  }
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameOver || board[index] !== null) return;
    if (mode === 'cpu' && currentPlayer !== playerMark) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer.toUpperCase();
    cell.classList.add(`text-${currentPlayer}`);

    checkWinner();
    if (!gameOver) {
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      updateTurnIndicator();

      if (mode === 'cpu' && currentPlayer !== playerMark) {
        setTimeout(computerMove, 500);
      }
    }
  });
});

resetBtn.addEventListener('click', () => {
  board = Array(9).fill(null);
  gameOver = false;
  currentPlayer = 'x';
  updateTurnIndicator();
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('text-x', 'text-o');
  });
});

