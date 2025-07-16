
/*----------------------------------------------------------------------------------- */

/*let usuario = "admin";
let password = "123456";

usuario === "admin" && password === "123456"
  ? console.log("Datos correctos")
  : console.log("Datos incorrectos");*/

let usuario = "admin";
let password = "123456";

// Verificar si ambos son correctos
(usuario === "admin" && password === "123456")
  ? console.log("Datos correctos")
  : (usuario !== "admin")
    ? console.log("El nombre de usuario es incorrecto")
    : console.log("La contraseña es incorrecta");