function spiralize(size) {
  // intialize two dimensional array
  const canvas = [...Array(size)].map(() => [...Array(size)].map(() => 0))
  canvas[0][0] = 1

  // intialize pointers
  let x_coord = 0
  let y_coord = 0

  // initalize boundaries
  const x_bounds = [0, size - 1]
  const y_bounds = [2, size - 1]

  // walk right, updating x pointer, until hitting boundary
  // do the same thing down, left, and up until boundaries cross
  while (!(x_bounds[0] > x_bounds[1]) || !(y_bounds[0] > y_bounds[1])) {
    // for each walk, count the number of steps
    // if less than two, we break to avoid doubling back on ourselves
    let steps

    // walk right
    steps = 0
    while (x_coord < x_bounds[1]) {
      x_coord++
      steps++
      canvas[y_coord][x_coord] = 1
    }
    // update right boundary
    x_bounds[1] -= 2
    if (steps < 2) {
      break
    }

    // walk down
    steps = 0
    while (y_coord < y_bounds[1]) {
      y_coord++
      steps++
      canvas[y_coord][x_coord] = 1
    }
    // update down boundary
    y_bounds[1] -= 2
    if (steps < 2) {
      break
    }

    // walk left
    steps = 0
    while (x_coord > x_bounds[0]) {
      x_coord--
      steps++
      canvas[y_coord][x_coord] = 1
    }
    // update left boundary
    x_bounds[0] += 2
    if (steps < 2) {
      break
    }

    // walk up
    steps = 0
    while (y_coord > y_bounds[0]) {
      y_coord--
      steps++
      canvas[y_coord][x_coord] = 1
    }
    // update up boundary
    y_bounds[0] += 2
    if (steps < 2) {
      break
    }
  }

  return canvas
}

console.log(spiralize(10))
