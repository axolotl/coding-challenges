const { performance } = require('perf_hooks')

let paragraph = ''

for (let i = 0; i < 1000000; i++) {
  paragraph += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

let t0 = performance.now()

let new_paragraph = ''

for (let i = paragraph.length; i >= 0; i--) {
  new_paragraph += paragraph.slice(i - 1, i)
}

let t1 = performance.now()

console.log('Iterate backwards took ' + (t1 - t0) + ' milliseconds.')

// --------------------------------- //

let t3 = performance.now()

let reversed = paragraph.split('')

let i = 0
let j = reversed.length - 1

while (i < j) {
  reversed[i] = reversed[j]
  i++
  j--
}

reversed = reversed.join('')

let t4 = performance.now()

console.log('Two pointers took ' + (t4 - t3) + ' milliseconds.')
