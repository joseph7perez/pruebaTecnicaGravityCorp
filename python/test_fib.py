from fib import fib_list

def test_fib_list():
    assert fib_list([0, 1, 5, 10, 30]) == [0, 1, 5, 55, 832040]