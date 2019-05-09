// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

function generateMatrix(n) {
  const matrix = [...Array(n)].map(() => [...Array(n)].map(() => 0))
  let row = 0
  let col = 0
  let col_lower = 0
  let col_upper = n
  let row_lower = 0
  let row_upper = n
  let i = 1
  while (true) {
    // right
    while (col < col_upper) {
      matrix[row][col] = i
      i++
      col++
    }
    col--
    col_upper--
    row++
    row_lower++
    if (i >= n * n + 1) break
    //down
    while (row < row_upper) {
      matrix[row][col] = i
      i++
      row++
    }
    row--
    row_upper--
    col--
    if (i >= n * n + 1) break
    // left
    while (col >= col_lower) {
      matrix[row][col] = i
      i++
      col--
    }
    col++
    col_lower++
    row--
    if (i >= n * n + 1) break
    // up
    while (row >= row_lower) {
      matrix[row][col] = i
      i++
      row--
    }
    row++
    col++
    if (i >= n * n + 1) break
  }
  return matrix
}

console.log(generateMatrix(15))
