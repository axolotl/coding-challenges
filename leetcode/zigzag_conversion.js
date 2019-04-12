// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like
// this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(string, numRows) {
  // deal with edge case of only on row
  if (numRows == 1) return string

  // intialize matrix
  const matrix = [...Array(numRows)].map(() => [])

  // initalize direction
  let traverse_down = true

  // initialize pointers
  let col = 0
  let row = 0

  // loop over s
  Array.from(string).forEach(char => {
    // assign char to its spot in matrix
    matrix[row][col] = char

    // find next spot
    if (traverse_down) {
      // step down a row
      row++
      // switch to up mode (row is 0 indexed so needs + 1)
      if (row + 1 === numRows) {
        traverse_down = false
      }
    }
    // else means traverse up and right
    else {
      // step up a row and across a column
      row--
      col++
      // add a an empty column so we don't get index errors
      matrix.forEach(row => row.push(''))
      // switch to down mode
      if (row === 0) {
        traverse_down = true
      }
    }
  })

  // push all valid chars to solution in order
  let solution = []

  matrix.forEach(row =>
    row.forEach(char => {
      if (char.length) {
        solution.push(char)
      }
    })
  )

  // join into string and return
  return solution.join('')
}

console.log(convert('PAYPALISHIRING', 3)) // should print "PAHNAPLSIIGYIR"
console.log(convert('AB', 1))
