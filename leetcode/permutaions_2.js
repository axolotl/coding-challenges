// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

function permute(current, nums, combinations) {
  if (!nums.length) {
    combinations.add(current.toString())
    return
  }

  for (let i = 0; i < nums.length; i++) {
    permute(
      [...current, nums[i]],
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      combinations
    )
  }
}

function permuteUnique(nums) {
  if (!nums) return null
  let combinations = new Set()
  let current = []
  permute(current, nums, combinations)
  return [...combinations].map(combo => combo.split(','))
}

console.log(permuteUnique([1, 1, 2]))
