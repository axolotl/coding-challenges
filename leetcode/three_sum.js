// Given an array nums of n integers, are there elements a, b, c in
// nums such that a + b + c = 0? Find all unique triplets in the array
// which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum(nums) {
  // solutions array
  const solutions = []
  // duplicate check hashes (array of strings for easy checking)
  const hashes = []

  // three loops for covering all possibilities
  for (let i = 0; i + 2 < nums.length; i++) {
    for (let j = i + 1; j + 1 < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // assign new solution and sort
          const new_solution = [nums[i], nums[j], nums[k]].sort()
          // check that solution isn't a duplicate
          const hash = new_solution
            .map(item => item.toString())
            .reduce((acc, item) => acc.concat(item))
          // if it isn't
          if (!hashes.includes(hash)) {
            solutions.push(new_solution)
            hashes.push(hash)
          }
        }
      }
    }
  }

  // sort solutions
  solutions.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      if (a[1] < b[1]) {
        return -1
      } else if (a[1] > b[1]) {
        return 1
      } else {
        if (a[2] < b[2]) {
          return -1
        } else {
          return 1
        }
      }
    }
  })

  // return solutions
  return solutions
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // should print [ [-1, 0, 1], [-1, -1, 2] ]
