# Given an array that is sorted in ascending order containing unique integer elements, write a function that receives the sorted array as input and creates a valid binary search tree with minimal height.

# For example, given an array [1, 2, 3, 4, 5, 6, 7], your function should return a binary search tree with the form 4 /
# 2 6 / \ /
# 1 3 5 7

# Note that when we say "binary search tree" in this case, we're just talking about a tree that exhibits the expected form of a binary search tree. The tree in this case won't have an insert method that does the work of receiving a value and then inserting it in a valid spot in the binary search tree. Your function should place the values in valid spots that adhere to the rules of binary search trees, while also seeking to minimize the overall height of the tree.

# Here's a BinaryTreeNode class that you can use to construct a binary search tree:

# Your code goes here:
import math


def create_minimal_BST(array):
    # base case
    # print(array)
    if not len(array):
        return None

    # find middle element
    # create node instance:
    # --> with middle element as value
    # --> with left and right children assigned to the return values of calling
    #       create_minimal_BST on that section of the array
    # if that section has no elements, return None
    mid = len(array)//2

    new_node = BinaryTreeNode(array[mid])
    new_node.left = create_minimal_BST(array[:mid])
    new_node.right = create_minimal_BST(array[mid + 1:])

    return new_node


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Helper function to validate that the created tree is a valid BST


def is_BST(root):
    node_and_bounds_stack = []
    node_and_bounds_stack.append(
        {"node": root, "lower_bound": -math.inf, "upper_bound": math.inf})

    while node_and_bounds_stack != []:
        node_and_bounds = node_and_bounds_stack.pop()
        node = node_and_bounds["node"]

        lower_bound = node_and_bounds["lower_bound"]
        upper_bound = node_and_bounds["upper_bound"]

        if node.value <= lower_bound or node.value >= upper_bound:
            return False

        if node.left != None:
            node_and_bounds_stack.append(
                {"node": node.left, "lower_bound": lower_bound, "upper_bound": node.value})

        if node.right != None:
            node_and_bounds_stack.append(
                {"node": node.right, "lower_bound": node.value, "upper_bound": upper_bound})

    return True

# Helper function to check the max height of a BST


def max_depth(node):
    if node == None:
        return 0

    return 1 + max(max_depth(node.left), max_depth(node.right))


# Some tests
sorted_array = [1, 2, 3, 4, 5, 6, 7]
bst = create_minimal_BST(sorted_array)

print(is_BST(bst))     # should print true
print(max_depth(bst))  # should print 3

sorted_array = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100]
bst = create_minimal_BST(sorted_array)

print(is_BST(bst))     # should print true
print(max_depth(bst))  # should print 5
