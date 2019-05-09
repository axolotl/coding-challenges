// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

function binarySearch(start, end, arr, target) {
  let mid = Math.floor((start + end) / 2)
  if (start >= end) {
    if (arr[start] === target) return 1
    if (Array.isArray(arr) && Array.isArray(arr[0])) {
      if (target < arr[start][0]) {
        if (arr[start - 1]) {
          return binarySearch(
            0,
            arr[start - 1].length - 1,
            arr[start - 1],
            target
          )
        } else {
          return -1
        }
      } else {
        return binarySearch(0, arr[start].length - 1, arr[start], target)
      }
    } else {
      return -1
    }
  }

  let comparison
  if (Array.isArray(arr[mid])) {
    comparison = arr[mid][0]
  } else {
    comparison = arr[mid]
  }

  if (comparison === target) {
    return 1
  } else if (comparison > target) {
    return binarySearch(start, mid - 1, arr, target)
  } else {
    return binarySearch(mid + 1, end, arr, target)
  }
}

function searchMatrix(matrix, target) {
  if (matrix.length === 1) {
    return binarySearch(0, matrix[0].length - 1, matrix[0], target) > 0
      ? true
      : false
  }
  return binarySearch(0, matrix.length - 1, matrix, target) > 0 ? true : false
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3))
console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13)
)
console.log(searchMatrix([[1]], 0))
console.log(searchMatrix([[1], [3]], 0))
console.log(searchMatrix([[1]], 1))
console.log(searchMatrix([[1, 1]], 1))
