/*let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
    edad: 28,
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
  },
  {
    nombre: "Geraldine",
    pais: "Peru",
  },
  {
    nombre: "Gabriel",
    pais: "Argentina",
  },
  {
    nombre: "Mario",
    pais: "Argentina",
  },
];


let contenedor = document.querySelector("#contenedor-estudiantes");


for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].pais === "Argentina")
  contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
            </a>
            `;
}*/

/* trabajo MOSTRAR UNICAMENTE  A LOS ESTUDIANTES DE ARGENTINA DE FORMA DINAMICA */

  const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];

// Imagen por defecto (puedes cambiar la URL o usar una diferente para cada producto)
const imagenDefault = "https://i.blogs.es/098b7c/helados1/650_1200.jpg";

let contenedor = document.querySelector("#contenedor-productos");

for (let i = 0; i < productos.length; i++) {
  let producto = productos[i];

  contenedor.innerHTML += `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg w-full h-48 object-cover" src="${imagenDefault}" alt="Imagen de producto" />
      <div class="p-5">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${producto.nombre}</h5>
        <p class="mb-2 text-gray-700 dark:text-gray-400"> Precio: $${producto.precio}</p>
        <p class="mb-3 text-gray-700 dark:text-gray-400"> Stock: ${producto.stock}</p>
        <button ${producto.stock === 0 ? "disabled" : ""}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 
          rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Comprar
        </button>
      </div>
    </div>
  `;
}

/*  Mostrar todos los productos en una lista.

Cada producto debe mostrar:

Nombre

Precio

Stock disponible

Botón "Comprar"*/