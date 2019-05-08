// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// const plusOne = digits =>
//   (parseInt(digits.map(x => '' + x).join('')) + 1)
//     .toString()
//     .split('')
//     .map(x => parseInt(x))

const plusOne = digits =>
  [...digits.reverse(), 0]
    .map(item => ({ item, remainder: false }))
    .reduce(
      (collection, packet, i) =>
        i === 0
          ? [
              ...collection,
              { item: packet.item + 1, remainder: packet.item + 1 > 9 }
            ]
          : collection[collection.length - 1].remainder
          ? [
              ...collection,
              { item: packet.item + 1, remainder: packet.item + 1 > 9 }
            ]
          : [...collection, packet],
      []
    )
    .map(({ item }) => item)
    .map(item => (item > 9 ? item - 10 : item))
    .filter((item, i, arr) => !(i === arr.length - 1 && item === 0))
    .reverse()

console.log(plusOne([1, 2, 3]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne([9]))
console.log(plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
