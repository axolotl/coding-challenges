function divideStrings(a, b) {
  a = parseInt(a)
  b = parseInt(b)
  let quotient = 0

  while (a >= b) {
    a -= b
    quotient++
  }

  return [quotient.toString(), a.toString()]
}
