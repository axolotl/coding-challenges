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
  let num_steps = 0 // start with taking 0 steps
  let pointer = 0 // start on the first element

  step(array, minimum, num_steps, pointer)

  return minimum.value
}

let counter_two = 0

function calc_backwards(array) {
  // null cases
  if (!array.length || array[0] === 0) return Infinity

  // keep track of known minimum number of steps from each location
  let min_steps = Array(array.length).fill(Infinity)
  // set the last location to 0 steps since we're already there
  min_steps[min_steps.length - 1] = 0

  // loop over array backwards, skipping the last item (since that's already known)
  for (let i = array.length - 2; i >= 0; i--) {
    counter_two++
    // start by assuming it will take infinity steps from current location
    let smallest = Infinity

    // from all locations reachable from current location, find the smallest number of steps
    for (let j = 1; j <= array[i] && j + i < array.length; j++) {
      counter_two++
      if (min_steps[i + j] < smallest) {
        smallest = min_steps[i + j]
      }
    }
    // set steps for current location to smallest plus one (for the one step to get to the location of smallest)
    min_steps[i] = smallest + 1
  }

  // return number of steps from the first location
  return min_steps[0]
}

let counter_three = 0

function minJumps(arr, n = arr.length) {
  const jumps = new Array(n)

  if (n === 0 || arr[0] === 0) {
    return Infinity
  }

  jumps[0] = 0

  for (let i = 1; i < n; i++) {
    counter_three++
    jumps[i] = Infinity
    for (let j = 0; j < i; j++) {
      counter_three++
      if (i <= j + arr[j] && jumps[j] !== Infinity) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1)
        break
      }
    }
  }

  return jumps[n - 1]
}

let test_arr = [...Array(10000)].map(() => Math.floor(Math.random() * 10) + 1)
// console.log(test_arr)

// test 1 (not-dynamic)
// let t0 = performance.now()
// calc_min_number_of_steps(test_arr)
// let t1 = performance.now()

// console.log(`Test 1 took ${counter_one} steps`)
// console.log('Test 1 took ' + (t1 - t0) + ' milliseconds.')

// test 2 (dynamic)
let t2 = performance.now()
console.log(calc_backwards(test_arr))
let t3 = performance.now()

console.log(`Test 2 took ${counter_two} steps`)
console.log('Test 2 took ' + (t3 - t2) + ' milliseconds.')

// testing against brady's solution
let t4 = performance.now()
console.log(minJumps(test_arr))
let t5 = performance.now()

console.log(`Test 3 took ${counter_three} steps`)
console.log('Test 3 took ' + (t5 - t4) + ' milliseconds.')
