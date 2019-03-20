# Matrix Spiral Copy
# Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix's values into a 1D array in a clockwise spiral order. Your function then should return that array.

# Analyze the time and space complexities of your solution.

# Examples:

# input:  inputMatrix  = [[1, 2, 3, 4, 5],
#                         [6, 7, 8, 9, 10],
#                         [11, 12, 13, 14, 15],
#                         [16, 17, 18, 19, 20]
#                        ]

# output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

# call function


def spiralCopy(matrix):
    # intialize our results array
    results = []
    # do a while loop consuming matrix until it's gone
    while len(matrix) > 0:
        # maxtrix will have four steps
        # step 1 consume right -> popleft on array[0]
        while len(matrix) > 0 and len(matrix[0]) > 0:
            results.append(matrix[0].pop(0))

        if len(matrix) > 0:
            matrix.pop(0)
        # step 2 consume down -> popright on each sub array
        if len(matrix) > 0:
            for index in range(len(matrix)):
                results.append(matrix[index].pop())

        # step 3 consume left -> popright on the last array
        while len(matrix) > 0 and len(matrix[len(matrix) - 1]) > 0:
            results.append(matrix[len(matrix) - 1].pop())

        if len(matrix) > 0:
            matrix.pop()
        # step 4 consume up -> popleft on index 0 of each array
        if len(matrix) > 0:
            for index in range(len(matrix) - 1, 0, -1):
                results.append(matrix[index].pop(0))

    # return our results array
    return results


print(spiralCopy(
    [[1]]
))  # should print [1]


print(spiralCopy(
    [[1], [2]]
))  # should print [1, 2]


print(spiralCopy(
    [[1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]
))  # should print [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
