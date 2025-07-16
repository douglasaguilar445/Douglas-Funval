/*
//DECLARAR FUNCION
function saludar(){
    console.log("Hola Mundo :D");
}

//NECESITAMOS LLAMARLAS

saludar();
saludar();
saludar();
saludar();
saludar();

//Funcion que si recibe parametros

function saludo2(nombre){
    console.log("hola"+nombre+"como estas?");
}

//como se llaman las funciones pero con diferentes parametros

saludo2("Kevin")
saludo2("gabrie")
saludo2("yamila")

//funciones que no reciben ningun valor 

function despedida(){
    let chau = "hasta luego amigo mio";
    return chau;
}

// si yo llamo a esta funcion puedo guardarla en una variable o mostrar en consola

let despedidas1 = despedida();
console.log(despedidas1);

//funcion que si recibe un parametro y retorna un valor

//unction duplicar(numero){
    numero = numero * 2;
    return numero;
}
let nuevaVariable = duplicar(3);
numeroVariable = nuevaVariable / 2;
    return numero;

console.log (duplicar(7));
console.log (duplicar(10));
console.log (duplicar(2));
console.log (duplicar(3)); */

/*Tenemos que validar si la palabra o numero que ingrese el cliente es o no una palabra palindrome
123 === 321 
reconocer 
yo hago === yoga hoy

primer paso. pedirle al usario que ingrese la palabra o numero
crear una funcion que reciba una palabra y la devuelva sin espacios
crear una funcion que reciba una palabra y me la retorne toda en minusculas
segundo paso. crear una funcion que reciba una palabra y la invierta y la compare si son iguales y retorne true o false
crear una funcion que le muestra al cliente si su palbra es o no palindrome
*/


/*let datoUsuario = prompt("ingresa tu palabra");

let respuesta = sinEspacios(datoUsuario);
respuesta = minusculas(respuesta);
respuesta = invertir(respuesta);
console.log(retornaResultado(respuesta));

function sinEspacios(palabra) {
  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] !== " ") {
      resultado = resultado + palabra[i];
    }
  }
  return resultado;
}

function minusculas(palabra) {
  palabra = palabra.toLowerCase();
  return palabra;
}

function invertir(palabra) {
  let resultado = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    resultado = resultado + palabra[i];
  }
  if (resultado === palabra) {
    return true;
  } else {
    return false;
  }
}

function retornaResultado(booleano) {
  let respuesta;
  if (booleano) {
    respuesta = "tu palabra es palindrome";
  } else {
    respuesta = "tu palabra no es palindrome";
  }
  return respuesta;
}
/* 
GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA X Q UN NUMERO PRIMO ES AQUEL
Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
N=6
2,3,5,7,11,13
N=2
2,3
N=5
2,3,5,7,11
ahora deberan realizarlo con fUNCIONES


let cantidad = (prompt("Ingrsa el numero"))

function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}*/


