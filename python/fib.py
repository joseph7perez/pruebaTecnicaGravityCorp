from typing import List


def fibonacci(n):
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b

def fib_list(numbers: List[int]) -> List[int]:
    return [fibonacci(n) for n in numbers]


# Ejemplo:
# input_data = [0, 1, 2 , 3, 4, 5, 6, 7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30]
# result = fib_list(input_data)
# print(result)
