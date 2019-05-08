// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function sum(arr) {
  return arr.reduce((a, b) => a + b)
}

function maxSubArray(nums) {
  if (nums.length === 1) return nums[0]
  const total = sum(nums)
  let current_total = total
  let current_highest = total
  let left_bound = 0

  for (let i = 0; i < nums.length - 1; i++) {
    current_total -= nums[i]
    if (current_total > current_highest) {
      left_bound = i
      current_highest = current_total
    }
  }

  current_total = current_highest
  for (let i = nums.length - 1; i > left_bound; i--) {
    current_total -= nums[i]
    if (current_total > current_highest) {
      current_highest = current_total
    }
  }

  return current_highest
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([-2, 1]))
console.log(maxSubArray([-2, -1]))
