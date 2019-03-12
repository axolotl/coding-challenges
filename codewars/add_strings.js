function isValid(input) {
  return !!input.match(/^(\d+\.\d+)$|^(\d+)$/)
}

function prependZero(input) {
  if (input[0] === '.') {
    return '0' + input
  } else {
    return input
  }
}

function add(...args) {
  args = args.map(arg => prependZero(arg.toString()))

  for (let i = 0; i < args.length; i++) {
    if (!isValid(args[i])) {
      return NaN
    }
  }

  const integers = []
  const decimals = []

  function divvy(string) {
    if (string.includes('.')) {
      let [int_part, dec_part] = string.split('.')
      decimals.push(dec_part)
      integers.push(int_part)
    } else {
      integers.push(string)
    }
  }

  args.forEach(arg => divvy(arg))

  function sort_cb(a, b) {
    return a.length < b.length
  }

  integers.sort(sort_cb)
  if (decimals.length > 1) {
    decimals.sort(sort_cb)
  }

  let longest_int = integers[0].length
  for (let i = 1; i <= (integers.length - 1); i++) {
    let current_length = integers[i].length
    if (current_length < longest_int) {
      integers[i] = ('0'.repeat(longest_int - current_length)).concat(integers[i])
    }
  }


  if (decimals.length > 1) {
    let longest_dec = decimals[0].length
    for (let i = 1; i <= (decimals.length - 1); i++) {
      let current_length = decimals[i].length
      if (current_length < longest_dec) {
        decimals[i] = decimals[i].concat('0'.repeat(longest_dec - current_length))
      }
    }
  }

  let int_result = ''
  let dec_result = ''
  let carry = 0

  if (decimals.length > 1) {
    for (let i = decimals[0].length - 1; i >= 0; i--) {
      let addition = parseInt(decimals[0][i])
      for (let j = 1; j < decimals.length; j++) {
        addition += parseInt(decimals[j][i])
      }
      addition += carry

      if (addition >= 10) {
        dec_result = ((addition) % 10).toString() + dec_result
        carry = Math.floor(addition/10)
      } else {
        dec_result = (addition).toString() + dec_result
        carry = 0
      }
    }
  }

  for (let i = integers[0].length - 1; i >= 0; i--) {
    let addition = parseInt(integers[0][i])
    for (let j = 1; j < integers.length; j++) {
      addition += parseInt(integers[j][i])
    }
    addition += carry

    if (addition >= 10) {
      int_result = ((addition) % 10).toString() + int_result
      carry = Math.floor(addition/10)
    } else {
      int_result = (addition).toString() + int_result
      carry = 0
    }
  }

  if (carry) {
    int_result = carry.toString() + int_result
  }

  if (decimals.length === 1) {
    dec_result = decimals[0]
  }

  let result
  if (decimals.length) {
    result = int_result + '.' + dec_result
  } else {
    result = int_result
  }

  while (result[result.length - 1] === '0') {
    result = result.slice(0, result.length - 1)
  }

  while (result[0] === '0' && result[1] === '0') {
    result = result.slice(1)
  }

  return result
}

<!-- prettier-ignore -->
console.log(add(10000.86, 10000.186))
