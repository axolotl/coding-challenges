// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

function rotate(matrix) {
  let layer_start = 0
  let layer_end = matrix[0].length - 1

  while (layer_start < layer_end) {
    for (let i = 0; i < layer_end - layer_start; i++) {
      // start, then overwrite backwards
      let temp = matrix[layer_start][layer_start + i]

      // assign top to left
      matrix[layer_start][layer_start + i] = matrix[layer_end - i][layer_start]

      // assign left to bottom
      matrix[layer_end - i][layer_start] = matrix[layer_end][layer_end - i]

      // assign bottom to right
      matrix[layer_end][layer_end - i] = matrix[layer_start + i][layer_end]

      // assign right to temp
      matrix[layer_start + i][layer_end] = temp
    }
    layer_start++
    layer_end--
  }

  return matrix
}

// console.log(rotate([[1, 2], [3, 4]]))
// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(
//   rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
// )
console.log(
  rotate([
    [2, 29, 20, 26, 16, 28],
    [12, 27, 9, 25, 13, 21],
    [32, 33, 32, 2, 28, 14],
    [13, 14, 32, 27, 22, 26],
    [33, 1, 20, 7, 21, 7],
    [4, 24, 1, 6, 32, 34]
  ])
)

console.log('Should be:')
console.log([
  [4, 33, 13, 32, 12, 2],
  [24, 1, 14, 33, 27, 29],
  [1, 20, 32, 32, 9, 20],
  [6, 7, 27, 2, 25, 26],
  [32, 21, 22, 28, 13, 16],
  [34, 7, 26, 14, 21, 28]
])
