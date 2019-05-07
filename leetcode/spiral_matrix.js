// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(matrix) {
  let result = []
  while (matrix.length) {
    // take top
    result = [...result, ...matrix[0]]
    matrix = matrix.slice(1)
    if (!matrix.length) break
    // take right side
    matrix.forEach(row => {
      result.push(row.pop())
    })
    matrix = matrix.filter(row => row.length > 0)
    if (!matrix.length) break
    // take bottom
    result = [...result, ...matrix[matrix.length - 1].reverse()]
    matrix.pop()
    if (!matrix.length) break
    // take left
    let left_items = []
    matrix.forEach(row => {
      left_items.push(row.shift())
    })
    matrix = matrix.filter(row => row.length > 0)
    result = [...result, ...left_items.reverse()]
    if (!matrix.length) break
  }
  return result
}

// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(spiralOrder([[7], [9], [6]]))
