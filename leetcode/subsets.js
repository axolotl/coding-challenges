// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

class Combinator {
  constructor(limit) {
    this.limit = limit
    this.current = 0
  }

  get next() {
    let strRep = this.current.toString(2)
    if (strRep.length > this.limit) {
      return null
    } else {
      this.current++
      return [...('0'.repeat(this.limit - strRep.length) + strRep)]
    }
  }
}

function subsets(nums) {
  const sets = []
  const combinations = new Combinator(nums.length)
  for (let next; (next = combinations.next); ) {
    let newSet = []
    for (let i = 0; i < nums.length; i++) {
      if (next[i] > 0) {
        newSet.push(nums[i])
      }
    }
    sets.push(newSet)
  }
  return sets
}

console.log(subsets([1, 2, 3]))
