// Given n non-negative integers a1, a2, ..., an , where each represents a
// point at coordinate (i, ai). n vertical lines are drawn such that the two
// endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
// with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

function maxArea(heights) {
  // store max area
  let max_area = 0

  // loop over all heights
  for (let i = 0; i < heights.length; i++) {
    // loop over all the subsequent heights
    for (let j = i + 1; j < heights.length; j++) {
      // grab the lower height and multiply it by the distance
      let current_area = Math.min(heights[i], heights[j]) * (j - i)
      // compare with max area
      if (current_area > max_area) max_area = current_area
    }
  }

  // return max area
  return max_area
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // should print 49
