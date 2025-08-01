/* ----------- SINCRONÍA ------------- 
// Desayuno

console.log("Poner la olla en la estufa");
console.log("Esperar a que hierva la leche");
console.log("Servir la leche en un tazón");
console.log("poner el cereal en el tazón");
console.log("4. Sentarse a desayunar");

----------- ASINCRONÍA ------------- 
// Desayuno 

console.log("Poner la olla en la estufa");

setTimeout(() => {
  console.log("La leche está lista. Servir leche en un tazón");
}, 5000); 

console.log("Mientras tanto, saco el cereal y lo sirvo en el tazón");
console.log("veo caricaturas mientras desayuno");*/

/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];

//CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});

// Función para calcular el promedio
    function promedio(notas) {
      let suma = notas.reduce((acc, nota) => acc + nota, 0);
      return suma / notas.length;
    }

    // Consumir la promesa y mostrar aprobados
    listaEstudiantes
      .then((data) => {
        const aprobados = data.filter(est => promedio(est.notas) >= 51);

        let html = "";
        aprobados.forEach(est => {
          html += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px;">
              <h3>${est.nombre} (${est.edad} años)</h3>
              <p>Promedio: ${promedio(est.notas).toFixed(2)}</p>
            </div>
          `;
        });

        document.getElementById("contenedor").innerHTML = html;
      })
      .catch(error => {
        document.getElementById("contenedor").innerHTML = `<p style="color:red;">${error}</p>`;
      });
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 
*/