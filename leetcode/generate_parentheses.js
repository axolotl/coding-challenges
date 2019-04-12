// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/*
open parens get added up to n times initially
closed parens can be added any time there are outstanding open parens

for case is to add as many open as possible

possible orderings for n = 1
()

possible orderings for n = 2
(())
()()

possible orderings for n = 3
((()))
(()())

We have n - 1 changes to either open or close

set var to number of open parens
if number is 0, only open parens
if number is above 0, try both opening and closing

*/

// console.log(
//   `stack: ${stack} open_left: ${open_left} closed_left: ${closed_left} current: ${current} solutions: ${solutions}`
// )

function generate(stack, open_left, closed_left, current, solutions) {
  if (closed_left === 0) {
    solutions.push(current)
  } else {
    if (stack !== 0) {
      generate(
        stack - 1,
        open_left,
        closed_left - 1,
        current.concat(')'),
        solutions
      )
    }
    if (open_left > 0) {
      generate(
        stack + 1,
        open_left - 1,
        closed_left,
        current.concat('('),
        solutions
      )
    }
  }
}

function generateParenthesis(n) {
  const solutions = []
  generate(0, n, n, '', solutions)
  return solutions
}

console.log(generateParenthesis(3))
