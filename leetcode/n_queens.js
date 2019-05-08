// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

/*
Approach: 
Solve 1 row at a time
Add a queen to every possible location on row
calculate the cascading dead spots
if no spots, stop looking with given board
whenever all rows have gotten placements, add to solutions
*/

function calcRow(board, rowIndex, rowsRemaining, solutions) {
  if (rowsRemaining === 0) {
    solutions.push(board)
  }
  for (let i = 0; i < board[rowIndex].length - 1; i++) {
    if (board[rowIndex][i] !== 'x') {
      newBoard = board.map(row => row.slice()) // make copy of board
      newBoard[rowIndex][i] = 'Q'
      // cross out squares looking downward
      for (let j = rowIndex + 1; j < newBoard.length; j++) {
        newBoard[j][i] = 'x'
      }
      // cross out squares looking rightward
      for (let j = rowIndex)
    }
  }
}

function solveNQueens(n) {
  const solutions = []
  const startingBoard = Array(n).fill(Array(n).fill(' '))
  calcRow(startingBoard, 0, 4, solutions)
}

console.log(solveNQueens(4))
