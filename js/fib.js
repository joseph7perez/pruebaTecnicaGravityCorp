function fibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

function fibList(numbers) {
    return numbers.map(fibonacci);
}

module.exports = { fibList };

// Ejemplo:
// const input = [0, 1, 2 , 3, 4, 5, 6, 7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30];
// const result = fibList(input);
// console.log(result); 