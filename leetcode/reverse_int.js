/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const neg = x < 0
  const reversed = parseInt(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join('')
  )
  const new_num = reversed * (neg ? -1 : 1)
  if (new_num < -Math.pow(2, 31) || new_num > Math.pow(2, 31) - 1) {
    console.log('sob')
    return 0
  }
  return new_num
}
