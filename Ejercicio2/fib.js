function fibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

function calcularFibonacci() {
      const input = document.getElementById('numero');
      const resultDiv = document.getElementById('resultado');
      const errorDiv = document.getElementById('error');
      const value = input.value.trim();

      resultDiv.textContent = '';
      errorDiv.textContent = '';

      if (value === '' || isNaN(value)) {
        errorDiv.textContent = 'Por favor, ingresa un número válido.';
        return;
      }

      const num = parseInt(value);

      if (num < 0) {
        errorDiv.textContent = 'El número debe ser mayor o igual a 0.';
        return;
      }

      resultDiv.textContent = `Fibonacci(${num}) = ${fibonacci(num)}`;
}
