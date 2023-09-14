let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  
  let currentPlayer = 'X';
  
  function printBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.innerText = board[i][j];
      }
    }
  }
  
  function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
      return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
      return true;
    }
  
    return false;
  }
  
  function makeMove(row, col) {
    if (board[row][col] === ' ') {
      board[row][col] = currentPlayer;
      printBoard();
  
      if (checkWinner()) {
        document.getElementById('message').innerText = `${currentPlayer} wins!`;
        disableClicks();
      } else if (board.flat().every(cell => cell !== ' ')) {
        document.getElementById('message').innerText = 'It\'s a draw!';
        disableClicks();
      } else {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      }
    } else {
      alert('Invalid move! Try again.');
    }
  }
  
  function disableClicks() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.onclick = null;
      }
    }
  }
  