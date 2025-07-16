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
