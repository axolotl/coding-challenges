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

const { performance } = require('perf_hooks')

let counter_one = 0

function step(array, minimum, num_steps, pointer) {
  counter_one++
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
  let min_jumps_per_item = Array(array.length).fill(0)
  let num_steps = 0 // start with taking 0 steps
  let pointer = 0 // start on the first element

  step(array, minimum, num_steps, pointer)

  return minimum.value
}

let counter_two = 0

function calc_backwards(array) {
  // store values for total number of steps to end for each item
  let min_steps = Array(array.length).fill(Infinity)

  // loop over array backwards to addatively caclulate remaining steps
  for (let i = array.length - 1; i >= 0; i--) {
    counter_two++
    // initial case
    if (i === array.length - 1) {
      min_steps[i] = 0
      continue
    }

    // for locations that current step can reach, calc smallest
    let smallest = Infinity
    for (let j = 1; j <= array[i]; j++) {
      counter_two++

      if (min_steps[i + j] < smallest) {
        smallest = min_steps[i + j]
      }
    }
    // set steps for currently considered location to smallest additional plus one
    min_steps[i] = smallest + 1
  }

  // return smallest number of steps from the first location
  console.log(min_steps)
  return min_steps[0]
}

let test_arr = [...Array(10)].map(() => Math.floor(Math.random() * 20) + 1)
console.log(test_arr)

console.log(calc_min_number_of_steps(test_arr))
console.log(counter_one)

console.log(calc_backwards(test_arr))
console.log(counter_two)
