const { fibList } = require('./fib');

test('Serie Fibonacci', () => {
    expect(fibList([0, 1, 5, 10, 30])).toEqual([0, 1, 5, 55, 832040]);
});

