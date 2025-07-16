/*
let permisoMama = false;
let permisoPapa = true;
edad = 28;
if (edad >= 18) {
  if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }
} else {
  console.log("me quedo en casa");
} 


let permisoMama = false;
let permisoPapa = true;
let edad = 28;

if (edad >= 18 && (permisoMama || permisoPapa)) {
  console.log("puedo salir a bailar");
} else {
  console.log("me quedo en casa");
} */

/*
let dia = 14;
let mes = 11; 
let año = 2003;

let diaHoy = 15;
let mesHoy = 7;
let añoHoy = 2025;

// saber si un año es bisiesto
function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

//cuántos días tiene un mes
function diasDelMes(mes, anio) {
  switch (mes) {
    case 1: return 31;
    case 2: return esBisiesto(anio) ? 29 : 28;
    case 3: return 31;
    case 4: return 30;
    case 5: return 31;
    case 6: return 30;
    case 7: return 31;
    case 8: return 31;
    case 9: return 30;
    case 10: return 31;
    case 11: return 30;
    case 12: return 31;
    default: return 0;
  }
}

let diasVividos = 0;

//Sumar días desde nacimiento hasta fin de su año de nacimiento
for (let m = mes; m <= 12; m++) {
  if (m === mes) {
    diasVividos += diasDelMes(m, año) - dia;
  } else {
    diasVividos += diasDelMes(m, año);
  }
}

//Sumar días completos de los años intermedios
for (let a = año + 1; a < añoHoy; a++) {
  diasVividos += esBisiesto(a) ? 366 : 365;
}

//Sumar días del año actual hasta la fecha actual
for (let m = 1; m <= mesHoy; m++) {
  if (m === mesHoy) {
    diasVividos += diaHoy;
  } else {
    diasVividos += diasDelMes(m, añoHoy);
  }
}

console.log("La persona ha vivido " + diasVividos + " días.");*/

/*let numero = 5;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}

console.log("El factorial de " + numero + " es: " + factorial);*/

/*let numero = parseInt(prompt("Escribe un número para calcular su factorial"));
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado = resultado * i;
}

console.log("El factorial de " + numero + " es: " + resultado);*/



/*
let numeroCliente = parseInt(prompt("Ingresa cuántos números primos quieres:"));
let primosEncontrados = 0; 
let numero = 2; 

for (let i = 1; primosEncontrados < numeroCliente; ) {
  let esPrimo = true;

  
  for (let j = 2; j < numero; j++) {
    if (numero % j === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(numero);
    primosEncontrados++;
    i++; 
  }

  numero++; 
}
console.log*/

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
