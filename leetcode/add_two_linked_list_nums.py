# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        remainder = 0
        head = None
        current = None

        while l1 or l2:
            value_1 = l1.val if l1 else 0
            value_2 = l2.val if l2 else 0
            summed = value_1 + value_2 + remainder
            remainder = 1 if summed >= 10 else 0
            value = summed - 10 if summed >= 10 else summed

            new_node = ListNode(value)
            if not head:
                head = new_node
                current = head
            else:
                current.next = new_node
                current = current.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        if remainder:
            new_node = ListNode(remainder)
            current.next = new_node

        return head
