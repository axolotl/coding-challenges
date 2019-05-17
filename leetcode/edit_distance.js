// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

function calcDistance(word1, word2, distances, current) {
  const { shortest } = distances

  // base case
  if (!word1.length && !word2.length) {
    if (current < shortest) {
      distances.shortest = current
    }
  } else if (!word1.length || !word2.length) {
    const difference = Math.max(word1.length, word2.length)
    if (current + difference < shortest) {
      distances.shortest = current + difference
    }
  }

  // case if letters are the same
  else if (word1.slice(-1) === word2.slice(-1)) {
    calcDistance(word1.slice(0, -1), word2.slice(0, -1), distances, current)
  }

  // all other cases
  else {
    // case if insert
    calcDistance(word1.slice(0, -1), word2.slice(0), distances, current + 1)

    // case if delete
    calcDistance(word1.slice(0), word2.slice(0, -1), distances, current + 1)

    // case if replace
    calcDistance(word1.slice(0, -1), word2.slice(0, -1), distances, current + 1)
  }
}

function minDistance(word1, word2) {
  const distances = { shortest: Infinity }

  calcDistance(word1, word2, distances, 0)

  return distances.shortest
}

console.log(minDistance('horse', 'ros'))
console.log(minDistance('dinitrophenylhydrazine', 'benzalphenylhydrazone'))
