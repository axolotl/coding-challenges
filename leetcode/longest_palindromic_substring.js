// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

function isPalidrome(s, start, end) {
  let len = Math.ceil((end - start) / 2)
  for (let i = 0; i < len; i++) {
    if (s[start + i] !== s[end - i]) {
      return false
    }
  }
  return true
}

function longestPalindrome(s) {
  if (!s.length) return s

  let longest

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalidrome(s, i, j)) {
        if (!longest || j - i + 1 > longest.length) {
          longest = s.slice(i, j + 1)
        }
      }
    }
  }

  return longest
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('a'))
