// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

function permute(current, nums, combinations) {
  if (!nums.length) {
    combinations.push(current)
    return
  }

  for (let num of nums) {
    permute([...current, num], nums.filter(x => x !== num), combinations)
  }
}

function generate_permutations(nums) {
  if (!nums) return null
  let combinations = []
  let current = []
  permute(current, nums, combinations)
  return combinations
}

console.log(generate_permutations([1, 2, 3]))
