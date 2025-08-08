const API_URL = 'https://funval-backend.onrender.com';
let token = '';
let usuario = 'douglas123';
let clave = '12345';
let productosDisponibles = [];
let carrito = [];

// Registro
function registrarComprador() {
  return fetch(`${API_URL}/registro-comprador`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: usuario, password: clave })
  });
}

// Login
function iniciarSesion() {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: usuario, password: clave })
  })
    .then(res => res.json())
    .then(data => {
      token = data.access_token;
      return token;
    });
}

// Mostrar productos
function cargarProductos() {
  return fetch(`${API_URL}/productos/`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
    .then(res => res.json())
    .then(productos => {
      productosDisponibles = productos;
      const contenedor = document.getElementById('productos-lista');
      const select = document.getElementById('producto-select');
      contenedor.innerHTML = '';
      select.innerHTML = '';


     productos.forEach(p => {
  const card = document.createElement('div');
  card.className = 'bg-white border rounded-lg shadow-sm p-5';

  const nombre = p.nombre.toLowerCase();

  let imagenURL = 'https://via.placeholder.com/300x200?text=Producto';

  if (nombre.includes('manzana')) {
    imagenURL = 'https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/MANZNA-ROJA.jpg';
  } else if (nombre.includes('plátano') || nombre.includes('platano')) {
    imagenURL = 'https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725';
  } else if (nombre.includes('mandarina')) {
    imagenURL = 'https://kitchenacademy.es/wp-content/uploads/Mandarina.jpg';
  } else if (nombre.includes('pan')) {
    imagenURL = 'https://www.infobae.com/resizer/v2/BXHYVKXWTVFC5O7QNNH3LXF32A.jpg?auth=b819a8d08570203c26eed5bd9c4267f02c466eab3f9ee194e87f5dfa808d4817&smart=true&width=1200&height=1200&quality=85';
  } else if (nombre.includes('leche')) {
    imagenURL = 'https://glycemic-index.net/images/CcjBBjdE4b.webp';
  } else if (nombre.includes('huevo') || nombre.includes('huevos')) {
    imagenURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHJsA42zIH36XB8dbGGdypFfRA72JFujEIg&s';
  } else if (nombre.includes('queso')) {
    imagenURL = 'https://www.cocinista.es/download/bancorecursos/recetas/receta-queso-gouda.jpg';
  } else if (nombre.includes('arroz')) {
    imagenURL = 'https://www.infobae.com/new-resizer/kIhrnp3zGe6XvzMA2O5OoD2NDaM=/arc-anglerfish-arc2-prod-infobae/public/DFN6EUB2SFC7BPEAQWDCKUJUIA.jpg';
  } else if (nombre.includes('galleta')) {
    imagenURL = 'https://recetasdecocina.elmundo.es/wp-content/uploads/2015/09/cookies-receta.jpg';
  } else if (nombre.includes('refresco') || nombre.includes('cola')) {
    imagenURL = 'https://walmartsv.vtexassets.com/arquivos/ids/372484/Gaseosa-Coca-Cola-Regular-Lata-354-ml-2-3689.jpg?v=638392773683200000';
  } else if (nombre.includes('aceite')) {
    imagenURL = 'https://www.superaki.mx/cdn/shop/products/0000075005443_e5e5165c-a0f3-4624-b811-96f5065495e3_300x300.png?v=1675776298';
  } else if (nombre.includes('atun')) {
    imagenURL = 'https://portal.ucm.cl//content/uploads/bfi_thumb/ATUN-UCM-p6ht0xx8jgvkzruznjt3ppvzy6jl7m6qv3pcj2lvg0.jpg';
  } else if (nombre.includes('chorizo')) {
    imagenURL = 'https://diacofoods.sv/wp-content/uploads/2020/06/chorizo-parrillero.jpg';
  } else if (nombre.includes('cereal')) {
    imagenURL = 'https://surtitienda.vteximg.com.br/arquivos/ids/161077-2000-2000/00740085250135.1.jpg?v=636862201561630000';
  } else if (nombre.includes('yogur')) {
    imagenURL = 'https://www.cocinista.es/download/bancorecursos/recetas/yogur-bulgaro.jpg';
  } else if (nombre.includes('chocolate')) {
    imagenURL = 'https://comercializadorajm.com/wp-content/uploads/2021/01/186-ya.jpg';
  } else if (nombre.includes('saladita') || nombre.includes('galleta salada')) {
    imagenURL = 'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/2/7/27983_1.jpg?width=265&height=390&store=default&image-type=image';
  } else if (nombre.includes('pollo')) {
    imagenURL = 'https://acdn-us.mitiendanube.com/stores/323/592/products/pollo-kosher1-d0a470da73a47133a615132957197015-640-0.jpeg';
  } else if (nombre.includes('agua')) {
    imagenURL = 'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/4/4/44_2.jpg?width=265&height=390&store=default&image-type=image';
  } else if (nombre.includes('pasta dental') || nombre.includes('dental')) {
    imagenURL = 'https://images.ctfassets.net/tdc24j4ik3zq/59a1RGg86XaHESicRtX03G/90b28eafe4dbe69eb10573a06977b3ad/file.png?fm=webp&q=75';
  } else if (nombre.includes('papel higienico') || nombre.includes('papel')) {
    imagenURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Toiletpapier_%28Gobran111%29.jpg/1200px-Toiletpapier_%28Gobran111%29.jpg';
  } else if (nombre.includes('detergente')) {
    imagenURL = 'https://walmartsv.vtexassets.com/arquivos/ids/467745-800-450?v=638548406362070000&width=800&height=450&aspect=true';
  } else if (nombre.includes('jabon')) {
    imagenURL = 'https://www.protex-soap.com/content/dam/cp-sites/personal-care/protex-relaunch/es_gt/products/protex-balance-saludable-110g.jpg';
  } else {
    imagenURL = ''; // imagen por defecto
  }

  card.innerHTML = `
          <img src="${imagenURL}" alt="${p.nombre}" class="w-full h-48 object-cover mb-4 rounded">
          <h5 class="text-xl font-semibold mb-2">${p.nombre}</h5>
          <p class="text-gray-700 mb-2">${p.descripcion || 'Sin descripción'}</p>
          <span class="text-2xl font-bold text-blue-700 mb-4">$${p.precio}</span>
          <button onclick="agregarAlCarrito(${p.id})" class="mt-auto bg-[var(--secondary)] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow">
            🛒 Comprar
          </button>
        `;

        contenedor.appendChild(card);

        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = `${p.nombre} ($${p.precio})`;
        select.appendChild(option);
      });
    });
}

// Agregar al carrito
function agregarAlCarrito(idProducto) {
  const existente = carrito.find(item => item.id === idProducto);
  if (existente) {
    existente.cantidad += 1;
  } else {
    const producto = productosDisponibles.find(p => p.id === idProducto);
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }
  mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalSpan = document.getElementById('carrito-total');
  lista.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center border-b py-2';
    li.innerHTML = `
      <span>${item.nombre} x${item.cantidad}</span>
      <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
      <button onclick="eliminarDelCarrito(${index})" class="text-red-600 text-sm ml-2">✖️</button>
    `;
    lista.appendChild(li);
    total += item.precio * item.cantidad;
  });

  totalSpan.textContent = `$${total.toFixed(2)}`;
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Crear venta desde formulario tradicional
function crearVenta(productoId, cantidad) {
  fetch(`${API_URL}/ventas/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      productos_id: [parseInt(productoId)],
      cantidades: [parseInt(cantidad)]
    })
  })
    .then(res => res.json())
    .then(() => {
      alert('✅ Venta creada con éxito');
      verMisVentas();
    })
    .catch(() => alert('❌ Error al crear la venta'));
}

// Crear venta desde carrito
function crearVentaDesdeCarrito() {
  if (carrito.length === 0) {
    alert('🛒 Tu carrito está vacío');
    return;
  }

  const productos_id = carrito.map(p => p.id);
  const cantidades = carrito.map(p => p.cantidad);

  fetch(`${API_URL}/ventas/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ productos_id, cantidades })
  })
    .then(res => res.json())
    .then(() => {
      alert('✅ Venta realizada con éxito');
      carrito = [];
      mostrarCarrito();
      verMisVentas();
    })
    .catch(() => alert('❌ Error al procesar la venta'));
}

// Ver mis ventas
function verMisVentas() {
  fetch(`${API_URL}/ventas/mis-ventas`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
    .then(res => res.json())
    .then(ventas => {
      const lista = document.getElementById('ventas-lista');
      lista.innerHTML = '';
      ventas.forEach(v => {
        const li = document.createElement('li');
        li.textContent = `🧾 Venta #${v.id} - Total: $${v.total}`;
        lista.appendChild(li);
      });
    });
}

// Iniciar sesión y cargar productos
registrarComprador()
  .catch(() => console.log("Usuario ya registrado"))
  .finally(() => {
    iniciarSesion().then(() => cargarProductos());
  });

// Escuchar el formulario
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('venta-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const productoId = document.getElementById('producto-select').value;
    const cantidad = document.getElementById('cantidad-input').value;
    crearVenta(productoId, cantidad);
  });

  document.getElementById('crear-carrito-btn').addEventListener('click', crearVentaDesdeCarrito);
});