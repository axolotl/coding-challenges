class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if len(self.items) > 0:
            return self.items.pop()
        else:
            return None

    def peek(self):
        if len(self.items) > 0:
            return self.items[len(self.items) - 1]
        else:
            return None


class MaxStack:
    def __init__(self):
        self.max = None
        self.stack = Stack()

    def push(self, item):
        if ((self.max is None) or (item > self.max)):
            self.max = item

        self.stack.push(item)

    def pop(self):
        item = self.stack.pop()

        if (item == self.max):
            new_max = 0
            for value in self.stack.items:
                if (value > new_max):
                    new_max = value
            self.max = new_max

        return item

    def peek(self):
        return self.stack.peek()

    def getMax(self):
        return self.max


# For testing
maxStack = MaxStack()
print(maxStack.getMax())

maxStack.push(1)
print(maxStack.getMax())

maxStack.push(1)
print(maxStack.getMax())

maxStack.push(100)
print(maxStack.getMax())

maxStack.push(100)
print(maxStack.getMax())

maxStack.pop()
print(maxStack.getMax())

print(maxStack.stack.items)
