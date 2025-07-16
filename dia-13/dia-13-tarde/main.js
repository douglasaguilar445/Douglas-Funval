let opcion = parseInt(prompt(
  "Calculadora XD\n" +
  "1. Sumar\n" +
  "2. Restar\n" +
  "3. Multiplicar\n" +
  "4. Dividir\n" +
  "Ingresa una opción (1, 2, 3 o 4):"
));

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

const operaciones = {
  1: (a, b) => a + b,
  2: (a, b) => a - b,
  3: (a, b) => a * b,
  4: (a, b) => a / b,
}

let resultado = operaciones[opcion]
  ? operaciones[opcion](num1, num2)
  : "Opción inválida";

alert("Resultado:" + resultado); 