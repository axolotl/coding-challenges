function diagonalDifference(arr) {
  // init diagonal ints
  let rightDiag = 0
  let leftDiag = 0

  // calc diagonals
  for (let i = 0; i < arr.length; i++) {
    rightDiag += arr[i][i]
    leftDiag += arr[i][arr.length - i - 1]
  }

  return Math.abs(rightDiag - leftDiag)
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr2 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

console.log(diagonalDifference(arr))
console.log(diagonalDifference(arr2))
