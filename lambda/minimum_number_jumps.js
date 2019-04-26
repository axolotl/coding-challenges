// Minimum Number of Jumps
// Given an array of integers where each element represents the maximum
// number of steps that can be made forward from that element, write a
// function to return the minimum number of jumps to reach the end of the
// array, starting from the first element. If an element is 0, then we
// cannot move through that element.

// Example:

// Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3   // going from 1 -> 3 -> 8 -> 9

// starting at the first element, jump each one of the number of possible steps
// do this in a recursive fashion so that for each item we make all possible jumps again
// because we won't know that we've found the fastest route while there are unexplored routes
// we'll keep calculating jumps until the we don't have any possible routes that have fewer
// than the minimum number of steps.

// to do this we'll keep track of the current minimum
// we'll come back to dynamic programming to make the solution more efficient

function step(array, minimum, num_steps, pointer) {
  // define base case aka when we reach the end of the array
  if (pointer === array.length - 1) {
    // reset minumum if necessary
    if (!minimum.value || num_steps < minimum.value) {
      minimum.value = num_steps
    }
    return // return from function to short circuit rest of logic
  }
  // case where we exceeded minimum
  if (minimum.value && num_steps >= minimum.value) return

  // out of bounds case
  if (!array[pointer]) return

  // normal case
  for (let i = 1; i <= array[pointer]; i++) {
    step(array, minimum, num_steps + 1, pointer + i)
  }
}

function calc_min_number_of_steps(array) {
  // store as object to allow passing into recursion as pointer not value
  let minimum = { value: null } // set this to null so we can apply boolean logic when we first give it a value
  let num_steps = 0 // start with taking 0 steps
  let pointer = 0 // start on the first element

  step(array, minimum, num_steps, pointer)

  return minimum.value
}

console.log(calc_min_number_of_steps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))
