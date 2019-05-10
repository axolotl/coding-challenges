// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28

function calcMoves(position, gridLimits, cache) {
  const { row, rowIndex } = position
  const { rowLimit, rowIndexLimit } = gridLimits

  if (row === rowLimit && rowIndex === rowIndexLimit) {
    return 1
  }

  let downPaths = 0
  let rightPaths = 0

  if (row < rowLimit) {
    if (cache[row + 1][rowIndex]) {
      downPaths = cache[row + 1][rowIndex]
    } else {
      downPaths = calcMoves({ row: row + 1, rowIndex }, gridLimits, cache)
      cache[row + 1][rowIndex] = downPaths
    }
  }

  if (rowIndex < rowIndexLimit) {
    if (cache[row][rowIndex + 1]) {
      rightPaths = cache[row][rowIndex + 1]
    } else {
      rightPaths = calcMoves({ row, rowIndex: rowIndex + 1 }, gridLimits, cache)
      cache[row][rowIndex + 1] = rightPaths
    }
  }

  return downPaths + rightPaths
}

function uniquePaths(m, n) {
  const cache = {
    ...[...Array(m)].map(() => ({ ...[...Array(n)].map(() => 0) }))
  }

  return calcMoves(
    { row: 0, rowIndex: 0 },
    { rowLimit: m - 1, rowIndexLimit: n - 1 },
    cache
  )
}

console.log(uniquePaths(3, 2))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(19, 13))
