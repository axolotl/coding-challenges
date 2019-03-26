# Kth to Last Node in a Singly-Linked List
# Given a pointer to the head element of a linked list, write a function that also takes an integer parameter k and returns the kth to last node of the list.


class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


a = ListNode("Australian Sheperd")
b = ListNode("Beagle")
c = ListNode("Cairne Terrier")
d = ListNode("Dobermann")
e = ListNode("English Mastiff")

a.next = b
b.next = c
c.next = d
d.next = e


def reverseList(head):
    # start with prev set to none
    prev = None

    # increment through entire list
    while head.next:
        # grab the next node
        _next = head.next
        # point head backwards
        head.next = prev
        # set prev to head
        prev = head
        # move current to _next
        head = _next

    # finish the last reversal
    head.next = prev
    # return new head
    return head


def kthToLastNode(k, head):
    # reverse list and get new head
    node = reverseList(head)
    # iterate k values through new list
    for i in range(k):
        node = node.next
    # return the value at the node being pointed to
    return node.value


# def print_list(node):
#     print(node.value)
#     while node.next:
#         node = node.next
#         print(node.value)


# print_list(reverseList(a))

print(kthToLastNode(3, a))
