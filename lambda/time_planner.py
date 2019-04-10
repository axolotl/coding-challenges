def findTimeslot(a, b, duration):
    for a_time in a:
        for b_time in b:
            start_time = max(a_time[0], b_time[0])
            end_time = min(a_time[1], b_time[1])
            if end_time - start_time >= duration:
                return [start_time, start_time + duration]

    return []


a = [[10, 50], [60, 120], [140, 210]]
b = [[0, 15], [60, 70]]
duration = 8
print(findTimeslot(a, b, duration))

# output: [60, 68]

a = [[10, 50], [60, 120], [140, 210]]
b = [[0, 15], [60, 72]]
duration = 12
print(findTimeslot(a, b, duration))

# output: [60, 72]

a = [[10, 50], [60, 120], [140, 210]]
b = [[0, 15], [60, 70]]
duration = 12
print(findTimeslot(a, b, duration))

# output: []

a = [[60, 120]]
b = [[59, 70]]
duration = 8
print(findTimeslot(a, b, duration))

# output: [60, 68]
