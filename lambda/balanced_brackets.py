bracket_pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
}


def balancedBrackets(brackets):
    stack = []

    for bracket in brackets:
        if bracket in bracket_pairs.keys():
            stack.append(bracket)
        elif bracket in bracket_pairs.values():
            if bracket_pairs[stack.pop()] is not bracket:
                return False
        else:
            continue

    if len(stack):
        return False

    return True


print(balancedBrackets('{}[]()'))        # should print True
print(balancedBrackets('{(([]))}'))      # should print True
print(balancedBrackets('{ [ ] ( ) }'))   # should print True
print(balancedBrackets('{ [ ( ] ) }'))   # should print False
print(balancedBrackets('((('))             # should print False
print(balancedBrackets('{[}'))           # should print False
