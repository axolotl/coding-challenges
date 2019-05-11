// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// function allValuesPresent(window) {
//   return Object.values(window).reduce((acc, value) => {
//     return acc && !!value
//   }, true)
// }

function windowValuesMatchReqs(window, reqs) {
  return Object.keys(window).reduce((acc, key) => {
    return acc && window[key] >= reqs[key]
  }, true)
}

function minWindow(string, chars) {
  const windowReqs = chars.split('').reduce((acc, item) => {
    if (acc[item]) {
      return { ...acc, [item]: acc[item] + 1 }
    } else {
      return { ...acc, [item]: 1 }
    }
  }, {})

  const windowValues = chars
    .split('')
    .reduce((acc, item) => ({ ...acc, [item]: 0 }), {})

  const windowMax = string.length
  let windowFront = 0
  let windowBack = 0
  let smallestWindow = ''

  while (windowBack < string.length) {
    if (windowValuesMatchReqs(windowValues, windowReqs)) {
      if (
        !smallestWindow.length ||
        windowFront - windowBack < smallestWindow.length
      ) {
        smallestWindow = string.slice(windowBack, windowFront)
      }
      if (windowValues[string[windowBack]] !== undefined) {
        windowValues[string[windowBack]]--
      }
      windowBack++
    } else {
      if (windowFront < windowMax) {
        if (windowValues[string[windowFront]] !== undefined) {
          windowValues[string[windowFront]]++
        }
        windowFront++
      } else {
        if (windowValues[string[windowBack]] !== undefined) {
          windowValues[string[windowBack]]--
        }
        windowBack++
      }
    }
  }

  return smallestWindow
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('aa', 'aa'))
console.log(minWindow('cabefgecdaecf', 'cae'))
