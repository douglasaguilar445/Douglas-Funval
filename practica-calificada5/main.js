let opcion = parseInt(prompt(
  "Calculadora de Áreas Geométricas\n" +
  "1. Calcular área de un Cuadrado\n" +
  "2. Calcular área de un Rectángulo\n" +
  "3. Calcular área de un Triángulo\n" +
  "Ingresa una opción (1, 2 o 3):"
));

// Validamos la opción
if (opcion === 1) {
  // Cuadrado
  let lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
  if (lado > 0) {
    let area = lado * lado;
    console.log("El área del cuadrado es: " + area);
    alert("El área del cuadrado es: " + area);
  } else {
    console.log("Dato inválido. El lado debe ser mayor que cero.");
    alert("Dato inválido. El lado debe ser mayor que cero.");
    
  }

} else if (opcion === 2) {
  // Rectángulo
  let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
  if (base > 0 && altura > 0) {
    let area = base * altura;
    console.log("El área del rectángulo es: " + area);
    alert("El área del rectángulo es: " + area);
  } else {
    console.log("Datos inválidos. La base y la altura deben ser mayores que cero.");
    alert("Datos inválidos. La base y la altura deben ser mayores que cero.");
  }

} else if (opcion === 3) {
  // Triángulo
  let base = parseFloat(prompt("Ingresa la base del triángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  if (base > 0 && altura > 0) {
    let area = (base * altura) / 2;
    console.log("El área del triángulo es: " + area);
    alert("El área del triángulo es: " + area);
  } else {
    console.log("Datos inválidos. La base y la altura deben ser mayores que cero.");
    alert("Datos inválidos. La base y la altura deben ser mayores que cero.");
  }

} else {
  console.log("Opción no válida. Por favor ingresa 1, 2 o 3.");
  alert("Opción no válida. Por favor ingresa 1, 2 o 3.");
}
