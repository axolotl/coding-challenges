/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let longest_str = 0
  let start = 0
  let end = 0
  let current = new Set()
  let grow = true
  let duplicate = null

  while (end <= s.length) {
    if (end - start > longest_str) {
      longest_str = end - start
    }

    if (grow) {
      if (current.has(s[end])) {
        duplicate = s[end]
        grow = false
      } else {
        current.add(s[end])
        end++
      }
    } else {
      if (s[start] == duplicate) {
        grow = true
      }
      current.delete(s[start])
      start++
    }
  }

  return longest_str
}
