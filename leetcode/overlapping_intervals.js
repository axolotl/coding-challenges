// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

function merge(intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      return 0
    }
  })
  return intervals.reduce((acc, item) => {
    if (!acc.length) {
      return [item]
    }
    const [prevStart, prevEnd] = acc[acc.length - 1]
    const [currentStart, currentEnd] = item
    if (prevEnd >= currentStart) {
      if (currentEnd > prevEnd) {
        return [...acc.slice(0, -1), [prevStart, currentEnd]]
      } else {
        return [...acc.slice(0, -1), [prevStart, prevEnd]]
      }
    } else {
      return [...acc, item]
    }
  }, [])
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [0, 4]]))
console.log(merge([[1, 4], [1, 5]]))
console.log(merge([[1, 4], [2, 3]]))
