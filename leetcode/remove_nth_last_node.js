// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

function removeNthFromEnd(head, n) {
  // set right and left pointers
  let right = head
  let left = head
  let left_prev = null // for keeping stitching list back together when removing left

  // move right pointer our n - 1 spaces
  while (n > 1) {
    // because our counting from end is not zero-indexed
    if (right.next) {
      right = right.next
      n--
    } else {
      return null
    }
  }

  // move left and right right until hitting the end of the list
  while (right.next) {
    right = right.next
    left_prev = left
    left = left.next
  }

  // remove the left item
  if (left_prev) {
    left_prev.next = left.next
  } else {
    // this will only happen if left IS head
    head = left.next
  }

  return head
}
