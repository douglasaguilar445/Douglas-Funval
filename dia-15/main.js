/* las notas de un esdudiante de funval esta esan dentro de un array
ejmplo 
let notas = [32,100,25,78] 
let notas = [32, 100, 10, 8, 0]
let notas = [32]
let notas = [32,77]
reelizar una funcion que reciba un array y nos retorne el promdeio de un estudiante */

/*
let notas = [32, 100, 25, 78];  


function calcularPromedio(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }

  let promedio = suma / lista.length;

  return promedio;
}

let resultado = calcularPromedio(notas);
console.log("📚 El promedio del estudiante es:", resultado);*/


/*
IDEA XD 
sumaDiagonal = sumaDiagonal + matriz[0][0]; // 28
sumaDiagonal = sumaDiagonal + matriz[1][1]; // 32
sumaDiagonal = sumaDiagonal + matriz[2][2]; // 15
sumaDiagonal = sumaDiagonal + matriz[3][3]; // 67*/

/*
let matriz = [
  [28, 39, 90, 89],
  [70, 32, 28, 18],
  [10, 0, 15, 31],
  [11, 23, 45, 67],
];

let sumaDiagonal = 0;

for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i];  // fila y columna con el mismo índice
}

console.log("Suma de la diagonal principal:", sumaDiagonal);*/

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];


/* mostrar a todos los estudiantes q sean de Argentina */

for (let i = 0; i < listaEstudiantes.length; i++) {
  if (listaEstudiantes[i].nacionalidad === "Argentina") {
    console.log("Nombre:", listaEstudiantes[i].nombre);
  }
}