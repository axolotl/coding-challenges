// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const sum = (a, b) => a + b

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
const increments = [3, 3, 3, 3, 3, 4, 3, 4]

const letter_numbers = [...Array(8)]
  .map((_, i) => (i + 2).toString())
  .reduce((acc, current, index) => {
    return {
      ...acc,
      [current]: alphabet.slice(
        index === 0 ? 0 : increments.slice(0, index).reduce(sum),
        increments.slice(0, index + 1).reduce(sum)
      )
    }
  }, {})

console.log(letter_numbers)

function letterCombinations(digits) {
  // define combinations
  const combinations = []
}

console.log(letterCombinations('23')) // should print ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
