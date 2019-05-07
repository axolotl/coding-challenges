function calc_veggies_eaten(garden) {
  // Step 0: intialize counter and coordinates (to be an object with row and column)
  let veggies_eaten = 0
  let current_coordinates = { row: 0, column: 0 }

  // Step 1: find the center and assign row and column
  // do this by finding all possible starting places, then iterating over them to find the best one
  let possible_rows = []
  let possible_columns = []

  // find the row midpoint(s)
  const row_midpoint = garden.length / 2 - 1

  // if number is even that means we don't have an exact midpoint but rather two possible ones
  if (Number.isInteger(row_midpoint)) {
    possible_rows.push(row_midpoint)
    possible_rows.push(row_midpoint + 1)
  } else {
    possible_rows.push(Math.ceil(row_midpoint))
  }

  // do the same for the column midpoint(s)
  const column_midpoint = garden[0].length / 2 - 1

  if (Number.isInteger(column_midpoint)) {
    possible_columns.push(column_midpoint)
    possible_columns.push(column_midpoint + 1)
  } else {
    possible_columns.push(Math.ceil(column_midpoint))
  }

  // caclulate all possible midpoint coordinates
  const possible_coordinates = []
  possible_rows.forEach(row =>
    possible_columns.forEach(column => {
      possible_coordinates.push({ row, column })
    })
  )

  // find the highest value starting point
  let highest_starting = 0
  possible_coordinates.forEach(({ row, column }) => {
    let current_value = garden[row][column]
    if (current_value > highest_starting) {
      highest_starting = current_value
      current_coordinates = { row, column }
    }
  })

  // Step 2: navigate the garden until there is nothing more to be eaten
  let not_done = true
  while (not_done) {
    // eat current square
    const { row, column } = current_coordinates
    veggies_eaten += garden[row][column]
    garden[row][column] = 0

    // look in all possible directions
    const possible_directions = []

    // look up
    if (garden[row - 1] && [column] && garden[row - 1][column] > 0) {
      possible_directions.push({
        possible_next_row: row - 1,
        possible_next_column: column
      })
    }

    // look right
    if (garden[row][column + 1] && garden[row][column + 1] > 0) {
      possible_directions.push({
        possible_next_row: row,
        possible_next_column: column + 1
      })
    }

    // look down
    if (
      garden[row + 1] &&
      garden[row + 1][column] &&
      garden[row + 1][column] > 0
    ) {
      possible_directions.push({
        possible_next_row: row + 1,
        possible_next_column: column
      })
    }

    // look left
    if (garden[row][column - 1] && garden[row][column - 1] > 0) {
      possible_directions.push({
        possible_next_row: row,
        possible_next_column: column - 1
      })
    }

    // if all empty, set rabbit to not hungry and break
    if (!possible_directions.length) {
      not_done = false
      break
    }

    // otherwise choose the next step with the highest payoff and move the rabbit
    let highest_next = 0
    possible_directions.forEach(
      ({ possible_next_row, possible_next_column }) => {
        let current_next = garden[possible_next_row][possible_next_column]
        if (current_next > highest_next) {
          current_coordinates.row = possible_next_row
          current_coordinates.column = possible_next_column
          highest_next = current_next
        }
      }
    )
  }

  return veggies_eaten
}

console.log(
  calc_veggies_eaten([
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
  ])
)
