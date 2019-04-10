const calc = (A, B, C) => {
  let sum = (A != B) != C || (A && B && C) ? '1' : '0'
  let carry = (A && B) || ((A || B) && C) ? '1' : '0'
  return carry + sum
}

for (let a = 0; a < 2; a++) {
  for (let b = 0; b < 2; b++) {
    for (let c = 0; c < 2; c++) {
      console.log(`${a}+${b}+${c} = ${calc(a, b, c)}`)
    }
  }
}
