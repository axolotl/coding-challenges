let args
const checkIfSecondaryFunc = arr =>
  arr.some(str => str.includes('...')) ? args : arr

function defaultArguments(func, params) {
  args = checkIfSecondaryFunc(
    func
      .toString()
      .match(/\(.*\)/)[0]
      .slice(1, -1)
      .split(',')
  )
  const subbed = args.map(arg => params[arg] || NaN)
  return (...args) => func(...subbed.map((arg, i) => args[i] || arg))
}
