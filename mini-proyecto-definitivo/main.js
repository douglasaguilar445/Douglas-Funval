import { habilidades } from './habilidades.js';

function mostrarHabilidades() {
  const contenedor = document.getElementById("contenedor-habilidades");

  habilidades.forEach(habilidad => {
    const div = document.createElement("div");

    // Aquí usamos innerHTML para agregar el contenido de cada habilidad
    div.innerHTML = `
      <img src="${habilidad.icono}" class="w-20 mx-auto mb-2">
      <p><strong>${habilidad.nombre}</strong></p>
      <p class="text-sm text-gray-300">${habilidad.nivel}</p>
    `;

    contenedor.appendChild(div);
  });
}

// Esperamos que el HTML cargue y luego mostramos las habilidades
window.addEventListener('DOMContentLoaded', mostrarHabilidades);

// Toggle button for mobile navigation
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

//
import { projects } from './proyectos.js';

function mostrarProyectos() {
  const container = document.getElementById('proyectosContainer');

  projects.forEach(proj => {
    const div = document.createElement('div');
    div.className = "bg-white text-blue-900 p-4 rounded shadow dark:bg-gray-800 dark:text-white";

    div.innerHTML = `
      <img src="${proj.img}" alt="${proj.alt}" class="mb-2 rounded h-50 w-65 shadow-2xs" />
      <h4 class="font-bold">${proj.title}</h4>
      <p class="text-sm">${proj.description}</p>
      <a href="${proj.link}" class="text-red-600 font-semibold dark:text-yellow-400 hover:bg-yellow-200 hover:shadow-lg transition duration-300">See more</a>
    `;

    container.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', mostrarProyectos);