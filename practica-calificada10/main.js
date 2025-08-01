const usersContainer = document.getElementById("usersContainer");
const errorMessage = document.getElementById("errorMessage");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error("Error:", error);
    errorMessage.classList.remove("d-none");
  }
}

function renderUsers(users) {
  users.forEach(user => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const card = document.createElement("div");
    card.className = "card h-100 p-3";

    card.innerHTML = `
      <h5 class="card-title">Nombre: ${user.name}</h5>
      <p class="card-text"><strong>Usuario:</strong> ${user.username}</p>
      <p class="card-text"><strong>Email:</strong> ${user.email}</p>
      <p class="card-text"><strong>Empresa:</strong> ${user.company.name}</p>
    `;

    col.appendChild(card);
    usersContainer.appendChild(col);
  });
}


fetchUsers();