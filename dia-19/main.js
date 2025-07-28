/*let participante = {
    nombre: "Bruce",
    edad: 30,
    profesion: "Batman",
    ganador: true
};

let mensaje = participante.ganador
  ? `¡Felicidades ${participante.nombre}! Ganaste 1000000$ por participar como ${participante.profesion}.`
  : `Gracias por participar ${participante.nombre}, sigue intentando.`;

console.log(mensaje);*/


let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];


function mostrarEstudiante(estudiante) {
  console.log(`Nombre: ${estudiante.nombre}`);
  console.log(`País: ${estudiante.pais || "No informado"}`);
  console.log(`Edad: ${estudiante.edad || "No informada"}`);
  console.log(`Misión: ${estudiante.mision ? "Sí" : "No informado"}`);
 
}

for (let estudiante of estudiantesFunval) {
  mostrarEstudiante(estudiante);
}