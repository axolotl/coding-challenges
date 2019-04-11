// for assessing performance
const { performance } = require('perf_hooks')

// doubly linked list with add to tail and remove methods
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.number_of_players = 0
  }

  add_to_tail(node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.number_of_players++
  }

  remove(node) {
    if (node === this.head && node === this.tail) {
      this.head = null
      this.tail = null
    } else if (node === this.head) {
      this.head = this.head.next
      this.head.prev = null
    } else if (node === this.tail) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      node.previous.next = node.next
      node.next.prev = node.prev
    }
    this.number_of_players--
  }
}

// player node for storing player information as well as position in linked list
class PlayerNode {
  constructor(player_id) {
    this.id = player_id
    this.scores = []
    this.total_score = 0
    this.average = 0

    this.next = null
    this.prev = null
  }
}

class LeaderBoard {
  constructor() {
    // object for storing mapping between player ids and player nodes
    this.players = {}
    // list for storing player values
    this.list = new DoublyLinkedList()
  }

  check_position(player) {
    // since we're only adding to the tail, we only need to worry about moving up the list
    while (player.prev && player.prev.average < player.average) {
      // console.log(`${player.prev.id} is less than ${player.id}`)
      // move head and tail values (if applicable)
      if (this.list.head == player.prev) {
        this.list.head = player
      }
      if (this.list.tail == player) {
        this.list.tail = player.prev
      }

      // keep track of player.prev.prev for assigning to player.prev later
      const temp_prev = player.prev.prev

      // move player.next to the right
      player.prev.next = player.next
      player.prev.prev = player

      // move player to the left
      player.next = player.prev
      player.prev = temp_prev
    }
  }

  add_player(player_id) {
    // generate new node
    const new_player_node = new PlayerNode(player_id)
    // add node to players object
    this.players = { ...this.players, [player_id]: new_player_node }
    // add to end of list
    this.list.add_to_tail(new_player_node)
    // return pointer to new node
    return new_player_node
  }

  add_score(player_id, score) {
    // var that we'll assign our player node to
    let player

    // check if player exists, if so update score
    if (this.players[player_id]) {
      // get pointer to player
      player = this.players[player_id]
    }
    // if player does not exist, add to list with new score and update accordingly
    else {
      player = this.add_player(player_id)
    }

    // add to scores
    player.scores.push(score)
    // add to total score
    player.total_score += score
    // recalc average
    player.average = player.total_score / player.scores.length

    // make sure player is positioned properly in list
    this.check_position(player)
    // return new average
    return player.average
  }

  reset(player_id) {
    if (this.players[player_id]) {
      // get player
      const player = this.players[player_id]
      // reset all stats
      player.scores = []
      player.average = 0
      player.total_score = 0
      // remove from list
      this.list.remove(player)
      // readd to end of list
      this.list.add_to_tail(player)
    }
  }

  top(num) {
    // array to store ids in
    const top_players = []
    // grab as many as per the parameter
    let current = this.list.head
    while (num > 0 && current) {
      top_players.push(current.id)
      current = current.next
      num--
    }
    // return top player ids
    return top_players
  }
}

let t0 = performance.now()

const leader_board = new LeaderBoard()

for (let i = 0; i < 1000000; i++) {
  // add score for random user
  let random_user = Math.floor(Math.random() * 1000) + 1
  let random_score = Math.floor(Math.random() * 1000) + 1
  leader_board.add_score(random_user, random_score)
  // return top 5 scores
  leader_board.top(10)
}

let t1 = performance.now()
console.log('Code took ' + (t1 - t0) + ' milliseconds.')

// Test code here

// function array_equals(a, b) {
//   if (a === b) return true
//   if (a == null || b == null) return false
//   if (a.length != b.length) return false
//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false
//   }
//   return true
// }

// leader_board.add_score(1, 50)
// console.log(leader_board.add_score(2, 80) == 80)
// console.log(leader_board.add_score(2, 70) == 75)
// console.log(leader_board.add_score(2, 60) == 70)
// console.log('Add score should return the average. test with 1 score')
// console.log(leader_board.add_score(3, 90) == 90)
// console.log('Add score should return the average. test with 2 scores')
// console.log(leader_board.add_score(3, 85) == 87.5)
// console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:')
// console.log(array_equals(leader_board.top(3), [3, 2, 1]))
// console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:')
// console.log(array_equals(leader_board.top(2), [3, 2]))
// leader_board.reset(3)
// console.log(
//   'After reset top 3 [' + leader_board.top(3) + '] should equal [2, 1, 3]'
// )
// console.log(array_equals(leader_board.top(3), [2, 1, 3]))
