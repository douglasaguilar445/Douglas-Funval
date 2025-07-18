/*Implementa las funciones necesarias para que el usuario pueda:
Ingresar dinero en la cuenta.
Retirar dinero si el saldo es suficiente.
Consultar el saldo actual de la cuenta.*/


// Dinero que tengo guardado
let saldo = 0; 


let opcion = "";

while (opcion !== "4") {
  opcion = prompt(
    "Menu - Cuenta Bancaria\n" +
    "1. Ingresar dinero\n" +
    "2. Retirar dinero\n" +
    "3. Ver saldo\n" +
    "4. Salir\n" +
    "Elige una opción (1, 2, 3 o 4):"
  );

  if (opcion === "1") {
    let cantidad = parseFloat(prompt("¿Cuánto deseas ingresar?"));
    ingresarDinero(cantidad);
  } else if (opcion === "2") {
    let cantidad = parseFloat(prompt("¿Cuánto deseas retirar?"));
    retirarDinero(cantidad);
  } else if (opcion === "3") {
    consultarSaldo();
  } else if (opcion === "4") {
    alert("Gracias por usar tu cuenta.");
  } else {
    alert("Opción inválida.");
  }
}

//FUNCIONES

function ingresarDinero(cantidad) {
  // Esta función suma dinero al saldo
  if (cantidad > 0) {
    saldo = saldo + cantidad;
    alert("Has ingresado $" + cantidad + ". Nuevo saldo: $" + saldo);
  } else {
    alert("Solo puedes ingresar más de 0.");
  }
}

function retirarDinero(cantidad) {
  // Esta función resta dinero del saldo si hay suficiente
  if (cantidad > 0 && cantidad <= saldo) {
    saldo = saldo - cantidad;
    alert("Has retirado $" + cantidad + ". Nuevo saldo: $" + saldo);
  } else if (cantidad > saldo) {
    alert("No tienes suficiente dinero.");
  } else {
    alert("Solo puedes retirar más de 0.");
  }
}

function consultarSaldo() {
  // Esta función muestra cuánto dinero tengo
  alert("Tu saldo actual es: $" + saldo);
}