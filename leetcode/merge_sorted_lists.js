// Merge two sorted linked lists and return it as a new list. The new
// list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function mergeTwoLists(l1, l2) {
  // start new list
  let head
  let current

  // check if both are empty
  if (!l1 && !l2) {
    return l1
  }

  // check if one is empty
  if (!l1 || !l2) {
    if (l1) head = l1
    if (l2) head = l2
    return head
  }

  // pull from both while possible
  while (l1 && l2) {
    // grab the smallest imcoming value
    let smallest = l1.val < l2.val ? l1 : l2

    // initialize head and current if the don't exist
    if (!head) {
      head = smallest
      current = head
    }

    // handle all other cases
    else {
      current.next = smallest
      current = current.next
    }

    // increment smallest
    if (l1.val < l2.val) {
      l1 = l1.next
    } else {
      l2 = l2.next
    }
  }

  // if remaining list, attach to tail
  if (l1) current.next = l1
  if (l2) current.next = l2

  return head
}
