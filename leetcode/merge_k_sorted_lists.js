// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

function mergeTwoLists(lists) {
  // start new list
  let head
  let current

  // loop until all lists are empty
  while (lists.length) {
    // at each iteration of loop, sort lists
    lists.sort((a, b) => {
      if (a.val < b.val) {
        return -1
      } else {
        return 1
      }
    })

    // if no head, assign head and current the lowest value
    if (!head) {
      head = lists[0]
      current = head
      // increment the pointer in the list for what is now head
      lists[0] = lists[0].next
    }

    // otherwise assign current.next to lowest, increment current, and increment the lowest
    else {
      // set current.next pointer to the right node
      current.next = lists[0]
      // increment the list that node was a part of
      lists[0] = lists[0].next
      // increment the current pointer
      current = current.next
    }

    // filter out all null lists (lists that we've exhausted)
    lists = lists.filter(item => !!item)
  }

  return head
}

function mergeKLists(lists) {
  // start by filtering out empty
  lists = lists.filter(item => !!item)

  // check if all are empty
  if (lists == null || lists.length == 0) {
    return null
  }

  // if only one return that one
  if (lists.length === 1) {
    return lists[0]
  }

  while (lists.length > 1) {
    lists = [mergeTwoLists([lists[0], lists[1]]), ...lists.slice(2)]
  }

  return lists[0]
}

class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

function createLinkedList(items) {
  const nodes = items.map(item => new Node(item))

  for (let i = 0; i < items.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  return nodes[0]
}

// let head = createLinkedList([1, 4, 5])
// while (head) {
//   console.log(head.val)
//   head = head.next
// }

// [[1,4,5],[1,3,4],[2,6]]

let result = mergeKLists(
  [[1, 4, 5], [1, 3, 4], [2, 6]].map(items => createLinkedList(items))
)
while (result) {
  console.log(result.val)
  result = result.next
}
