const board = document.querySelector(".board");
const turnIndicator = document.getElementById("currentPlayer");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameActive = true;
let gameState = Array(9).fill("");

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // Filas
  [0,3,6], [1,4,7], [2,5,8], // Columnas
  [0,4,8], [2,4,6]           // Diagonales
];

function createBoard() {
  board.innerHTML = "";
  gameState = Array(9).fill("");
  gameActive = true;
  result.textContent = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    cell.addEventListener("click", handleMove);
    board.appendChild(cell);
  }
}

function handleMove(e) {
  const index = e.target.getAttribute("data-index");
  if (gameState[index] || !gameActive) return;

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    result.textContent = `¡Ganó ${currentPlayer}! 🎉`;
    gameActive = false;
  } else if (!gameState.includes("")) {
    result.textContent = "¡Empate!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnIndicator.textContent = currentPlayer;
  }
}

function checkWin() {
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c];
  });
}

resetBtn.addEventListener("click", () => {
  currentPlayer = "X";
  turnIndicator.textContent = currentPlayer;
  createBoard();
});

// Iniciar tablero al cargar
createBoard();