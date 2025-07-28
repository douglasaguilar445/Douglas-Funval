/*let boton = document.getElementById("#btn");

boton.addEventListener("click", function () {
 /*sera ejecutado solamente cuando el evento ocurre 
 console.log("hola kevin");
});*/

/*
let btn = document.querySelector("#btn");
let fiona = document.querySelector("#fiona");

    btn.addEventListener("click", () => {
      if (btn.textContent === "Día") {
        // Cambia a noche
        btn.textContent = "Noche";
        btn.classList.remove("bg-green-800");
        btn.classList.add("bg-red-800");

        fiona.src = "https://i.pinimg.com/564x/ff/b8/ba/ffb8ba6e90dff81813eade9a31399d7a.jpg";
        fiona.classList.remove("border-green-800");
        fiona.classList.add("border-red-800");
      } else {
        // Cambia a día
        btn.textContent = "Día";
        btn.classList.remove("bg-red-800");
        btn.classList.add("bg-green-800");

        fiona.src = "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png";
        fiona.classList.remove("border-red-800");
        fiona.classList.add("border-green-800");
      }
    });*/
/*
let btn = document.querySelector("#btn");
let fiona = document.querySelector("#fiona");

btn.addEventListener("click", () => {
  if (btn.textContent === "Día") {
    // Cambia a noche
    btn.setAttribute("class", "bg-red-800 text-white px-6 py-3 rounded-xl text-lg");
    btn.textContent = "Noche";

    fiona.setAttribute("src", "https://i.pinimg.com/564x/ff/b8/ba/ffb8ba6e90dff81813eade9a31399d7a.jpg");
    fiona.setAttribute("class", "w-60 h-auto rounded-lg border-4 border-red-800");
  } else {
    // Cambia a día
    btn.setAttribute("class", "bg-green-800 text-white px-6 py-3 rounded-xl text-lg");
    btn.textContent = "Día";

    fiona.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png");
    fiona.setAttribute("class", "w-60 h-auto rounded-lg border-4 border-green-800");
  }
});*/
/*
let formulario = document.querySelector("#formulario");

// 2. Escuchar el envío
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // 3. Obtener los valores
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let edad = document.querySelector("#edad").value;
  let nacionalidad = document.querySelector("#nacionalidad").value;

  // 4. Crear el objeto
  let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    nacionalidad: nacionalidad
  };

  // 5. Mostrarlo en consola
  console.log("Datos ingresados:", persona);
});*/

/* ----------Change------------ 
let contador = 0;
let anterior = "";
let opcionColor = document.querySelector("#selectorColor");

opcionColor.addEventListener("change", function (e) {
  let parrafo = document.querySelector("#colorTexto");
  if (contador === 0) {
    parrafo.classList.add(`text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  } else {
    parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  }
});*/

/*-----------Keydown------------*/

const abrirModal = document.querySelector("#abrirModal");
    const modal = document.querySelector("#modal");
    const formulario = document.querySelector("#formulario");
    const cuerpoTabla = document.querySelector("#cuerpoTabla");

    abrirModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.querySelector("#nombre").value;
      const edad = document.querySelector("#edad").value;
      const pais = document.querySelector("#pais").value;

      // Crear fila
      const fila = `
        <tr class="border-b">
          <td class="px-6 py-4">${nombre}</td>
          <td class="px-6 py-4">${edad}</td>
          <td class="px-6 py-4">${pais}</td>
        </tr>
      `;
      cuerpoTabla.innerHTML += fila;

      // Limpiar formulario y cerrar modal
      formulario.reset();
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });