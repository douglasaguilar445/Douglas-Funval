const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 }
];

//Recorrer y mostrar productos (forEach)
productos.forEach(producto => {
  console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});

//Crear un array de nombres de productos y verificar disponibilidad (map + include
const productosDisponibles = productos.map(p => p.nombre);
console.log(productosDisponibles);

const productoBuscado = "Tablet";
const disponible = productosDisponibles.includes(productoBuscado);
console.log(`${productoBuscado} está disponible: ${disponible}`);

//Aplicar un descuento a los productos (map)
const productosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: p.precio * 0.9  // Aplica 10% de descuento
}));

console.log(productosConDescuento);

//Filtrar productos por precio (filter)
const productosBaratos = productos.filter(p => p.precio < 100);
console.log(productosBaratos);

//Obtener los primeros productos (slice)
const primerosProductos = productos.slice(0, 2);
console.log(primerosProductos);

//Ordenar productos por precio (sort)
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);

//Invertir el orden de los productos (reverse)
const productosInvertidos = [...productos].reverse();
console.log(productosInvertidos);

